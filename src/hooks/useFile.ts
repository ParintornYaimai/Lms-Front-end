import { downloadService } from '@/services/fileService'
import { useEffect, useState } from 'react'

export const useFile = (fileId?: string) => {
    const [url, setUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!fileId) return;

        const fetchFile = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await downloadService(fileId);

                let blob;

                // ตรวจสอบว่าเป็น Blob โดยตรงหรือไม่
                if (res instanceof Blob) {
                    blob = res;
                }
                // ตรวจสอบ Axios response
                else if (res && typeof res === 'object' && 'data' in res && 'status' in res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    blob = res.data;
                }
                // ตรวจสอบ Fetch response
                else if (res && typeof res === 'object' && 'ok' in res && 'status' in res) {
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    blob = await res.blob();
                }
                // ตรวจสอบว่าเป็น object ที่มี blob property
                else if (res && typeof res === 'object' && res.blob) {
                    blob = res.blob;
                }
                else {
                    throw new Error('Unknown response format');
                }

                if (!blob || blob.size === 0) {
                    throw new Error('Empty file received');
                }

                const objectUrl = URL.createObjectURL(blob);
                setUrl(objectUrl);

            } catch (err) {
                console.error('Fetch file error:', err);
                setError(err instanceof Error ? err.message : "Failed to fetch file");
                setUrl(null);
            }
        };

        fetchFile();

        // Cleanup function
        return () => {
            if (url && url.startsWith('blob:')) {
                URL.revokeObjectURL(url);
            }
        };
    }, [fileId]);

    return { url, loading, error };
}