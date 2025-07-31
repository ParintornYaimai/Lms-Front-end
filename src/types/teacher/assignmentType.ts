export interface AssignmentFile {
  url: string;
  name: string;
  type: string;
  size: number;
  _id: string;
}

export interface AssignmentDateRange {
  start: Date; // เปลี่ยนเป็น Date เพราะ API คืนค่าเป็น Date object
  end: Date;
}

export interface AssignmentItem {
  _id: string;              // เป็น ObjectId จริงจาก MongoDB
  title: string;
  courseId: string;         // เป็น ObjectId จริงจาก MongoDB
  passpercen: number;
  date: AssignmentDateRange;
  files: AssignmentFile[];
  totalmark: number;
  status?: string;            // บาง object ไม่มี status
  __v: number;
  
  // fields ใหม่ที่เพิ่มมาจาก aggregate
  courseTitle: string;
  courseSubjectCate: string;
}

export interface AssignmentApiResponse {
  success: boolean;
  data: AssignmentItem[];
}

export interface AssignmentFile {
  _id: string;
  url: string;
  name: string;
  type: string;
  size: number;
}

export interface AssignmentDate {
  start: string; // ISO 8601
  end: string;
}

export interface CourseSubjectCate {
  _id: string;
  name: string;
}

export interface CourseInfo {
  _id: string;
  title: string;
  subtitle: string;
  coursesubjectcate: CourseSubjectCate;
}

export interface AssignmentDetail {
  _id: string;
  title: string;
  courseId: CourseInfo; // <== ปรับตรงนี้
  passpercen: number;
  date: AssignmentDate;
  files: AssignmentFile[];
  totalmark: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AssignmentDetailResponse {
  success: boolean;
  data: AssignmentDetail;
}


interface File  {
  fileId: string;
  filename: string;
  fileUrl: string;
  _id: string;
};

interface StudentInfo {
  _id: string;
  firstname: string;
  lastname: string;
};

export interface SubmissionData  {
  _id: string;
  score: number;
  files: File[];
  status: string;  // อาจใช้ enum ถ้ารู้สถานะชัดเจน เช่น 'Pending' | 'Submitted' | 'Overdue'
  studentInfo: StudentInfo;
  formattedCreatedAt: string; 
};

export interface ResultResponse {
  success: boolean;
  data: SubmissionData;
}
export interface UpdateScorePayload {
  studentId: string;
  score: number;
};
