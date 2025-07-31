export type ProfilePicture = {
  fileId: string;
  fileUrl: string;
  filename: string;
};

export type Friend = {
  _id: string;
  firstname: string;
  lastname: string;
  profilepicture: ProfilePicture | null;
};

export type getAllFriendsResponse = {
  success: boolean;
  myFriends: Friend[];
};


export type FriendUser = {
  _id: string;
  firstname: string;
  lastname: string;
  profilepicture: ProfilePicture
};

export type FriendRequest = {
  _id: string;
  fromUserId: FriendUser;
  toUserId: FriendUser;
  status: 'pending' | 'accepted' | 'rejected'; // ปรับตามที่ระบบคุณรองรับ
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type GetAllFriendRequestsResponse = {
  success: boolean;
  getAllData: FriendRequest[];
};


export type SearchResult = {
  _id: string;
  firstname: string;
  lastname: string;
  profilepicture: ProfilePicture;
};

export type SearchResponse = {
  success: boolean;
  searchData: SearchResult[];
};