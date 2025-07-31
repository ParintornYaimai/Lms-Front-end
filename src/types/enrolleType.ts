export interface enrolle {
  _id: string;
  title: string;
  subtitle: string;
  coursecateInfo: string;
  coursesubjectcateInfo: string;
  thumbnailurl: Thumbnail[];
  averageRating: number
  totalFeedback: number
  createdAt: string;      // หรือ Date ถ้าจะ parse เป็น Date object
  studentCount: number;
}

export interface enrolleResponse {
  success: boolean;
  data: enrolle[];
}


// Base types for nested objects
export interface Category {
  _id: string;
  name: string;
}

export interface SubCategory {
  _id: string;
  name: string;
}

export interface Teacher {
  firstname: string;
  lastname: string;
  profilepicture: string | null;
}

// Content types for coursecrm
export interface BaseContent {
  _id: string;
  type: 'text' | 'video' | 'pdf';
}

export interface TextContent extends BaseContent {
  type: 'text';
  content?: string;
}

export interface VideoContent extends BaseContent {
  type: 'video';
  url: string;
}

export interface PdfContent extends BaseContent {
  type: 'pdf';
  url: string;
  size: number;
}

export type CourseContent = TextContent | VideoContent | PdfContent;

export interface CourseSection {
  [x: string]: any;
  sectionname: string;
  content: CourseContent[];
}

export interface CourseCRM {
  _id: string;
  section: CourseSection[];
}

// Main course interface
export interface Course {
  _id: string;
  title: string;
  subtitle: string;
  subtitlelanguage:string
  coursecate: Category;
  coursesubjectcate: SubCategory;
  courselanguage: string;
  courselevel: string;
  coursetopic: string;
  duration: string; // ISO date string
  thumbnailurl: Thumbnail[];
  coursematerial: string;
  mainpoint: string[];
  whatyouwillteachincourse:string[];
  whothiscourseisfor: string[];
  coursereq: string[];
  coursecrm: CourseCRM[];
  createby: Teacher;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

// API Response wrapper
export interface CourseResponse {
  success: boolean;
  data: Course;
}

// Optional: Individual course list item (for when you need simpler data)
export interface CourseListItem {
  _id: string;
  title: string;
  subtitle: string;
  thumbnailurl: Thumbnail[];
  coursecate: Category;
  coursesubjectcate: SubCategory;
  studentCount?: number;
}

// For form data or creating courses
export interface CreateCourseData {
  title: string;
  subtitle: string;
  coursecate: string; // ObjectId as string
  coursesubjectcate: string; // ObjectId as string
  coursetopic: string;
  duration: Date | string;
  thumbnailurl: string;
  coursematerial: string;
  mainpoint: string[];
  coursereq: string[];
  coursecrm: {
    section: {
      sectionname: string;
      content: Omit<CourseContent, '_id'>[];
    };
  }[];
  createby: string; // ObjectId as string
}

// For updating courses
export interface UpdateCourseData extends Partial<CreateCourseData> {
  _id: string;
}

// Rrops 
export interface EnrolleComponentProps {
  // Course ID
  id: string;
  
  // Basic Course Info
  title: string;
  subtitle: string;
  coursetopic: string;
  duration: string;
  thumbnailurl: string;
  coursematerial: string;
  
  // Arrays
  mainpoint: string[];
  coursereq: string[];
  
  // Nested Objects
  coursecate: {
    _id: string;
    name: string;
  };
  coursesubjectcate: {
    _id: string;
    name: string;
  };
  createby: {
    firstname: string;
    lastname: string;
    profilepicture: string | null;
  };
  
  // Course Content/Curriculum
  coursecrm: {
    _id: string;
    section: {
      sectionname: string;
      content: {
        _id: string;
        type: 'text' | 'video' | 'pdf';
        url?: string;
        content?: string;
        size?: number;
      }[];
    };
  }[];
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
  __v: number;
  
  // Optional Props for Component Behavior
  isEnrolled?: boolean;
  loading?: boolean;
  error?: string | null;
  showEnrollButton?: boolean;
  showProgress?: boolean;
  progress?: number;
  enrollmentCount?: number;
  rating?: number;
  className?: string;
  
  // Event Handlers
  onEnroll?: (courseId: string) => void;
  onStartLearning?: (courseId: string) => void;
  onContentClick?: (courseId: string, sectionId: string, contentId: string) => void;
  onInstructorClick?: (instructorName: string) => void;
  onClick?: (courseId: string) => void;
}


export type Thumbnail = {
  fileId: string;
  fileUrl: string;
  filename: string;
  _id: string;
};