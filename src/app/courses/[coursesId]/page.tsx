'use client';
import Content from '@/component/courses/Content';
import Curriculum from '@/component/courses/Curriculum';
import { useFile } from '@/hooks/useFile';
import { getInProgressCourses } from '@/services/courseService';
import { CourseContent, CourseState } from '@/types/courseType';
import { use, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface Props {
  params: Promise<{ coursesId: string }>;
  searchParams: Promise<{ enrolledId: string }>; // เปลี่ยนเป็น Promise
}

const Page = ({ params, searchParams }: Props) => {
  const [course, setCourse] = useState<CourseState>()
  const [selectedVideo, setSelectedVideo] = useState<{
    name: string;
    fileId: string;
  } | null>(null);
  
  const { coursesId } = use(params); 
  const { enrolledId } = use(searchParams); // ใช้ use() กับ searchParams

  useEffect(() => {
    const fetchCourseId = async () => {
      try {
        const data = await getInProgressCourses(coursesId, enrolledId);
        setCourse(data.data);
      } catch (error: any) {
        toast.error(error);
      }
    }
    fetchCourseId();
  }, [coursesId, enrolledId])

  const handleVideo = (item: CourseContent) => {
    const fileId = (item.contentValue?.[0]?.[0] as any)?.fileId;
    if(fileId){
      setSelectedVideo({
        name: item.name,
        fileId,
      })
    }
  };

  const { url } = useFile(selectedVideo?.fileId ?? undefined);

  return (
    <div className="flex items-start justify-center">
      <div className="w-[60%] ml-4 my-2">
        <Content 
          url={url ?? ""}
          title={selectedVideo?.name ?? ""}
          createby={course?.createby}
          subtitle={course?.subtitle ?? ""}
        />
      </div>
      <div className="w-[40%] p-4 ">
        <div className='mb-2'>
          <h1 className='text-xl font-semibold '>Course Contents</h1>
        </div>
        <Curriculum 
          coursecrm={course?.coursecrm ?? []}
          handleVideo={handleVideo}
        />
      </div>
    </div>
  );
};

export default Page;