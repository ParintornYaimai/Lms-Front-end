export interface Thumbnail {
  fileId: string;
  filename: string;
  fileUrl: string;
  _id: string;
}

export interface Course {
  [x: string]: string;
  courseId: string;
  title: string;
  subtitle: string;
  thumbnailurl: Thumbnail[];
}

export interface EnrolledGroup {
  _id: string; // เช่น "not started"
  total: number;
  courses: Course[];
  enrolledIds: string;
}

export interface EnrolledResponse {
  success: boolean;
  data: EnrolledGroup[];
}


export type Enrollment = {
  _id: string;
  student: string;
  course: string;
  status: 'not-started' | 'in-progress' | 'completed'; // ปรับให้รองรับ enum สถานะได้
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type EnrollmentResponse = {
  success: boolean;
  data: Enrollment;
};
export interface CourseContent {
  id: number;
  name: string;
  contentType: string;
  contentValue: string[]; // อาจเป็น string หรือ object ถ้า array ซ้อน ต้องดูเพิ่ม
  _id: string;
}

export interface CourseCrm {
  id: number;
  name: string;
  lectures: CourseContent[];
  _id: string;
}

export interface CourseState{
  _id: string; // courseId
  title: string;
  coursetopic: string;
  coursecate: string;
  coursesubjectcate: string;
  coursecrm: CourseCrm[];
  createby: {
    firstname: string,
    lastname: string,
  }
  subtitle: string;
}

export interface CourseResponse {
  success: boolean;
  data:{
    _id: string; // courseId
    title: string;
    coursetopic: string;
    coursecate: string;
    coursesubjectcate: string;
    coursecrm: CourseCrm[];
    createby: {
      firstname: string,
      lastname: string,
    }
    subtitle: string;
  }
}
