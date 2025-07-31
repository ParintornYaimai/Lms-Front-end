export interface Author {
  _id: string;
  firstname: string;
  lastname: string;
  profilepicture: string | null;
}

export interface Note {
  _id: string;
  title: string;
  tag: string;
  description: string;
  author: Author;
  createdAt: Date; 
  updatedAt: Date;
  __v: number;
}

export interface NotesResponse {
  success: boolean;
  data: Note[];     
}

// noteid 
interface Comment {
  _id: string;
  content: string;
  noteId: string;
  author: CommentAuthor[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface CommentAuthor {
  _id: string;
  firstname: string;
  lastname: string;
  profilepicture:{
    fileId: string;
    fileUrl: string;
    filename: string;
  };
}
export interface NotesIdResponse {
  success: boolean;
  data: NoteId;
}

export interface NoteId {
  _id: string;
  title: string;
  tag: string;
  description: string;
  author: Author;
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface DeleteNoteResponse{
  success: boolean;
  message: string
}

