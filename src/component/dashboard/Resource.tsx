import React, { useState } from 'react';
import {
  BiSolidFilePdf,
  BiSolidFilePng,
  BiSolidFileJpg,
  BiSolidFileDoc
} from "react-icons/bi";
import ProgressBar from './ProgressBar';
import { ResourceCourse } from '@/types/dashboard';

type Props = {
  resourcesData?: ResourceCourse
}

interface DownloadProgress {
  [key: string]: {
    progress: number;
    isDownloading: boolean;
  }
}

const Resource = ({ resourcesData }: Props) => {
  const [downloadProgress, setDownloadProgress] = useState<DownloadProgress>({});

  const getFileIcon = (filename: string) => {
    const extension = filename.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf':
        return { icon: BiSolidFilePdf, color: '#F97316', bgColor: 'bg-orange-100', progressColor: 'bg-orange-500' };
      case 'jpg':
      case 'jpeg':
        return { icon: BiSolidFileJpg, color: '#3B82F6', bgColor: 'bg-blue-100', progressColor: 'bg-blue-500' };
      case 'png':
        return { icon: BiSolidFilePng, color: '#22C55E', bgColor: 'bg-green-100', progressColor: 'bg-green-500' };
      case 'doc':
      case 'docx':
        return { icon: BiSolidFileDoc, color: '#8B5CF6', bgColor: 'bg-purple-100', progressColor: 'bg-purple-500' };
      default:
        return { icon: BiSolidFilePdf, color: '#6B7280', bgColor: 'bg-gray-100', progressColor: 'bg-gray-500' };
    }
  };

  // ดาวน์โหลดไฟล์พร้อมแสดง progress
  const handleDownload = async (fileId: string, filename: string) => {
    setDownloadProgress(prev => ({
      ...prev,
      [filename]: { progress: 0, isDownloading: true }
    }));

    try {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';

      xhr.open('GET', `http://localhost:5500/api/download/${fileId}`, true); 

      xhr.onprogress = (event) => {
        if (event.lengthComputable) {
          const percent = (event.loaded / event.total) * 100;
          setDownloadProgress(prev => ({
            ...prev,
            [filename]: { progress: percent, isDownloading: true }
          }));
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          const blob = new Blob([xhr.response]);
          const url = URL.createObjectURL(blob);

          const link = document.createElement('a');
          link.href = url;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }

        setDownloadProgress(prev => ({
          ...prev,
          [filename]: { progress: 100, isDownloading: false }
        }));
      };

      xhr.onerror = () => {
        console.error('Download error');
        setDownloadProgress(prev => ({
          ...prev,
          [filename]: { progress: 0, isDownloading: false }
        }));
      };

      xhr.send();
    } catch (err) {
      console.error(err);
      setDownloadProgress(prev => ({
        ...prev,
        [filename]: { progress: 0, isDownloading: false }
      }));
    }
  };

  // Progress สำหรับไฟล์นั้น ๆ
  const getFileProgress = (filename: string) => {
    const progressEntry = downloadProgress[filename];
    return progressEntry || null;
  };

  return (
    <div className='h-full mx-2'>
      <div className='flex justify-between'>
        <h1 className='text-xl font-bold ml-2'>Yours Resources</h1>
        <button className='text-orange-600 text-sm p-1 px-2 cursor-pointer bg-orange-100 rounded-lg font-bold'>see more</button>
      </div>
      <div className='w-full mt-3'>
        {resourcesData?.map((course, courseIndex) => (
          <div key={courseIndex}>
            {/* <h2 className='text-lg font-semibold mb-2 text-gray-700'>{course.courseTitle}</h2> */}
            {course.files.map((file, fileIndex) => {
              const fileInfo = getFileIcon(file.filename);
              const IconComponent = fileInfo.icon;
              const currentProgress = getFileProgress(file.filename);

              return (
                <div key={file._id || fileIndex} className='flex my-3'>
                  {/* icon */}
                  <div className='w-10 h-10'>
                    <IconComponent
                      className='text-[2.50rem]'
                      style={{ color: fileInfo.color }}
                    />
                  </div>
                  {/* detail */}
                  <div className='w-full'>
                    <div className='h-full flex flex-col mx-3'>
                      <div className='h-1/2 flex items-center justify-between'>
                        <h1 className='text-sm font-bold'>{file.filename}</h1>
                        <span className='text-sm'>-</span>
                      </div>
                      <div className='h-1/2 mt-2'>
                        <ProgressBar
                          progress={currentProgress ? currentProgress.progress : 0}
                          width="100%"
                          height="5px"
                          color={fileInfo.progressColor}
                          bgColor={fileInfo.bgColor}
                        />
                        {currentProgress?.isDownloading && (
                          <span className='text-xs text-gray-600 mt-1'>
                            {Math.round(currentProgress.progress)}% downloading...
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* button */}
                  <button
                    onClick={() => handleDownload(file.fileId, file.filename)}
                    disabled={currentProgress?.isDownloading}
                    className={`text-orange-600 text-sm p-2 cursor-pointer hover:underline ${
                      currentProgress?.isDownloading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {currentProgress?.isDownloading ? 'Downloading...' : 'Download'}
                  </button>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resource;
