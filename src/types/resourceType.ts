export interface FileItem {
  fileId: string;
  fileUrl: string;
  filename: string;
}

export interface Resource {
  courseId: string;
  courseTitle: string;
  file: FileItem[];
}
