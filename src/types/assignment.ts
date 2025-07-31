interface AssignmentDate {
  start: string; // ISO date string
  end: string;   // ISO date string
}

interface AssignmentFile {
  // ตัวอย่างสมมติ properties ของไฟล์ เช่น
  fileId: string;
  fileName: string;
  fileType?: string;
  // ... เพิ่มเติมตามจริง
}

export interface Assignment {
  _id: string;
  title: string;
  courseId: string;
  courseName: string
  courseSubject: string;
  subject: string;
  passpercen: number;
  date: AssignmentDate;
  files: AssignmentFile[];
  totalmark: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  submissionStatus: string;
  // อาจจะมี fields เพิ่มเติมตาม model จริง
}

interface AssignmentGroup {
  courseId: string;
  courseName: string;
  createdAt: string;
  date: AssignmentDate;
  files: AssignmentFile[];
  passpercen: number;
  title: string;
  totalmark: number;
  updatedAt: string;
  _id: string;
}

export interface AssignmentsResponseData {
  assignments: Assignment[]; // หรือ Array<AssignmentGroup> ขึ้นกับข้อมูลจริง
  limit: number;
  page: number;
  totalAssignments: number;
  totalPages: number;
}

export interface AssignmentsApiResponse {
  success: boolean;
  data: AssignmentsResponseData;
}

export interface ResponseUploadFileAssignment {
  fileId: string;
  filename: string;
  fileUrl: string;
};