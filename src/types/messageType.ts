export type User = {
  _id: string;
  firstname: string;
  lastname: string;
  profilepicture?: {
    fileId: string;
    fileUrl: string;
    filename: string;
  } | null;
};

export type Message = {
  _id: string;
  chatroom: string;
  messageText: string;
  sender: string | User;
  receiver: string | User;
  files: any[];
  status: 'unread' | 'read';
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

