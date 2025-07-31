
export type BasicInfoType = {
  title: string;
  subtitle: string;
  coursecate: string;
  coursesubjectcate: string;
  coursetopic: string;
  courselanguage: string;
  subtitlelanguage: string;
  courselevel: string;
  duration: number;
  durationUnit: string;
};

export type AdvanceInfoType = {
  thumbnailurl: FileData | undefined
  coursematerial: string;
  whothiscourseisfor: string[];
  coursereq: string[];
  whatyouwillteachincourse: string[];
}

export interface FileData {
  fileId: string;
  fileUrl: string;
  filename: string;
}

export interface Lecture {
  id: number;
  name: string;
  contentType: "" | "video" | "file";
  contentValue: FileData[] | undefined | [];
}

export interface Section {
  id: number;
  name: string;
  lectures: Lecture[] | undefined | [];
}

export interface CurriculumInfoType {
  coursecrm: Section[] | undefined | [];
}

export interface publishInfoType{
  welmsg: string,
  conmsg: string
}

export interface FileData {
  fileId: string;
  filename: string;
  fileUrl: string;
}

export interface UploadResponse {
  success: boolean;
  data: FileData;
}

export interface CreateCourseResponse{
  success: boolean;
  message: string;
}

export interface CourseFile {
  fileId: string;
  fileUrl: string;
  filename: string;
  _id: string;
}

export interface CourseLecture {
  id: number;
  name: string;
  contentType: "file" | "video";
  contentValue: CourseFile[][];
  _id: string;
}

export interface CourseSection {
  id: number;
  name: string;
  lectures: CourseLecture[];
  _id: string;
}

export interface CourseItem {
  _id: string;
  title: string;
  subtitle: string;
  coursecate: string;
  coursesubjectcate: string;
  coursetopic: string;
  courselanguage: string;
  subtitlelanguage: string;
  courselevel: string;
  duration: number;
  thumbnailurl: CourseFile[];
  coursematerial: string;
  whatyouwillteachincourse: string[];
  coursereq: string[];
  whothiscourseisfor: string[];
  coursecrm: CourseSection[];
  welmsg?: string;
  conmsg?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CourseApiResponse {
  success: boolean;
  data: CourseItem[];
}