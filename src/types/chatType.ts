type User = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  profilepicture: {
    fileId: string;
    fileUrl: string;
    filename: string;
  };
};

type Message = {
  sender: User;
  receiver: string; // เห็นว่าเป็น ID ของ receiver ในรูปแบบ string
  messageText: string;
  files: any[]; // ถ้ารูปแบบชัดเจนกว่านี้ก็ระบุเพิ่มได้
  status: string;
  __v: number;
  actions: string;
};

export type ChatData = {
  _id: string;
  sender: User;
  receiver: User;
  createdAt: string; // หรือ Date ถ้าแปลงเป็น Date object
  updatedAt: string;
  __v: number;
  latestMessage: Message;
  otherUser: User;
};

export type getAllChatResponse = {
  success: boolean;
  chatData: ChatData[];
};

export type SelectedChat = {
  chatId: string;
  otherUser: {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    profilepicture: {
      fileId: string;
      fileUrl: string;
      filename: string;
    };
  };
};

export type otheruser = {
  _id: string;
  email: string;
  firstname: string;
  lastname: string;
  profilepicture: {
    fileId: string;
    fileUrl: string;
    filename: string;
  } ;
};

