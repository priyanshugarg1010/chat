export interface chatMessage {
  id: string;
  message: string;
  sender: {
    image: string;
    is_kyc_verified: boolean;
    self: boolean;
    user_id: string;
  };
  time: string;
}

export interface chatData {
  chats: chatMessage[];
  from: string;
  message: string;
  name: string;
  status: string;
  to: string;
}

export interface message {
  image: string;
  self: boolean;
  chat: string;
}
