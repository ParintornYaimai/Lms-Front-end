// services/socket.ts
import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const initiateSocketConnection = (userId: string) => {
  if (!socket) {
    socket = io("http://localhost:5500", {
      query: { userId },  // ส่ง userId ไป backend
    });
  }
  return socket;
};
export const disconnectSocket = () => {
  if(socket) {
    socket.disconnect();
    socket = null;
  }
};

export const getSocket = () => {
  if(!socket) {
    throw new Error("Socket not initialized. Call initiateSocketConnection first.");
  }
  return socket;
};