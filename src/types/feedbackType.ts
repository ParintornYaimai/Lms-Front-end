interface StudentDetails {
  firstname?: string;
  lastname?: string;
  profilepicture?: string | null;
}

// Individual Feedback Interface
interface Feedback {
  _id: string;
  rating: number;
  text: string;
  studentDetails: StudentDetails;
  createdAt: string; // ISO date string
}

// Aggregated Feedback Data Interface
export interface FeedbackAggregation {
  _id: string | null;
  averageRating: number;
  totalFeedbacks: number;
  feedbacks: Feedback[];
}

// API Response Interface
export interface FeedbackResponse {
  success: boolean;
  data: FeedbackAggregation[];
}

// Alternative: Flattened Response (แนะนำให้ปรับ API ให้ return แบบนี้)
export interface FeedbackResponseFlat {
  success: boolean;
  data: {
    averageRating: number;
    totalFeedbacks: number;
    feedbacks: Feedback[];
  };
}

// สำหรับใช้ใน function
export interface GetAllFeedbackResult {
  averageRating: number;
  totalFeedbacks: number;
  feedbacks: Feedback[];
}

//createFeedback
export interface CreateFeedbackResponse {
  success: boolean;
  data: {
    courseId: string;
    studentId: string;
    rating: number;
    text: string;
    _id: string;
    createdAt: string;  // ISO date string
    updatedAt: string;  // ISO date string
    __v: number;
  };
};