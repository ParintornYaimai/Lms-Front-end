import { useFile } from "@/hooks/useFile";
import { savePoint } from "@/services/teacher/assignmentService";
import { SubmissionData } from "@/types/teacher/assignmentType";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineFileDownload } from "react-icons/md";

type Props = {
  submitted?: SubmissionData;
  totalMask?: number;
  tigger: number;
  assignmentId?: string;
};

const FileDownload = ({ fileData }: { fileData: { fileId: string } }) => {
  const { url } = useFile(fileData.fileId);
  return (
    <button
      className="flex items-center bg-white border border-gray-300 px-4 py-1 rounded hover:bg-gray-100 cursor-pointer mr-2"
      onClick={() => {
        if (url) window.open(url, "_blank");
      }}
    >
      Download <span className="ml-1"><MdOutlineFileDownload /></span>
    </button>
  );
};

const Result = ({ submitted, totalMask, tigger, assignmentId }: Props) => {
  // 💡 เก็บคะแนนเป็น state โดยใช้ studentId เป็น key
  const [scores, setScores] = useState<Record<string, number>>({});

  const handleChangeScore = (studentId: string, value: string) => {
    setScores((prev) => ({
      ...prev,
      [studentId]: Number(value),
    }));
  };

  useEffect(() => {
    const runSavePoint = async () => {
      if (tigger > 0 && assignmentId) {
        try {
          const payload = Object.entries(scores).map(([studentId, score]) => ({
            studentId,
            score,
          }));

          const response = await savePoint(assignmentId, payload);
          alert(response.data)
        } catch (error: any) {
          toast.error(error?.message || "Failed to save point");
        }
      }
    };

    runSavePoint();
  }, [tigger]);

  return (
    <div className="p-8">
      <table className="min-w-full border border-gray-300 overflow-hidden">
        <thead className="bg-gray-100 text-left text-gray-500">
          <tr>
            <th className="px-4 py-2 border-b">Student ID</th>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Attachments</th>
            <th className="px-4 py-2 border-b">Point</th>
            <th className="px-4 py-2 border-b text-center">Status / Date</th>
          </tr>
        </thead>

        <tbody>
          {submitted?.map((item: any) => {
            const studentId = item?.studentInfo?._id || item?._id;
            return (
              <tr key={studentId}>
                <td className="px-4 py-2 text-gray-500">{studentId}</td>
                <td className="px-4 py-2 text-gray-500">
                  {item?.studentInfo?.firstname} {item?.studentInfo?.lastname}
                </td>

                <td className="px-4 py-2 text-gray-500 flex flex-wrap">
                  {item.files?.map((file: any) => (
                    <FileDownload
                      key={file.fileId}
                      fileData={{ fileId: file.fileId }}
                    />
                  ))}
                </td>

                <td className="px-4 py-2">
                  <input
                    type="number"
                    className="border border-gray-300 w-20 px-2 py-1 rounded"
                    value={scores[studentId] || ""}
                    onChange={(e) =>
                      handleChangeScore(studentId, e.target.value)
                    }
                    max={totalMask} 
                    min={0}
                  />
                  <span className="ml-5 text-gray-500">/{totalMask}</span>
                </td>

                <td className="px-4 py-2">
                  <p
                    className={`text-center text-sm font-bold ${
                      item?.status === "Overdue"
                        ? "text-red-500"
                        : item?.status === "Submitted"
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  >
                    {item?.status}
                  </p>
                  <p className="text-center text-sm text-gray-500">
                    {item?.formattedCreatedAt}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
