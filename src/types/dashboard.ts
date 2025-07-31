export type ResourceFile = {
  fileId: string;
  fileUrl: string;
  filename: string;
  _id: string;
};


export type FinishAssignmentAggregationResult = {
  _id: null;
  totalAssignments: number;
  assignmentCompleted: number;
};

export type ResourceCourse = {
  courseTitle: string;
  files: ResourceFile[];
};

export interface RecentEnrolledCourse {
  courseId: string;     
  title: string;
  duration: number;
}

export interface AssignmentProgressByCategory {
  totalAssignments: number;
  assignmentCompleted: number;
  categoryId: string;        // ObjectId as string
  categoryName: string;
}