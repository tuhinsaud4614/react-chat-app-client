import { GroupUserRole, UserRole } from "./enums";
import { AttachmentType } from "./types";

export interface IImage {
  originalName: string;
  webpName: string;
  originalUrl: string;
  webpUrl: string;
  width: number;
  height: number;
}

export interface IExtendedImage {
  main: IImage;
  640: IImage;
  750: IImage;
  828: IImage;
  1080: IImage;
  1200: IImage;
  1920: IImage;
  2048: IImage;
  3840: IImage;
}

export interface INormalImage {
  src: string;
  height?: number;
  width?: number;
  alt: string;
}

export interface IVideo {
  src: string;
  thumbnail: INormalImage | IExtendedImage;
  duration: number;
}

export interface IAttachment {
  type: AttachmentType;
  value: string;
}

export interface IErrorResponse {
  success: boolean;
  detail: string | null;
  message: string;
  error: string;
  timeStamp: string;
}

export interface ISuccessResponse {
  success: boolean;
  detail: string | null;
  message: string;
  data: any;
  timeStamp: string;
}

export interface IUser {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  avatar: IExtendedImage | null;
  role: UserRole;
}

export interface IMessage {
  conversationId: string;
  sender: string | IUser;
  message: string | IAttachment | IExtendedImage;
  seenBy: IUser[];
  createdAt?: Date;
  updatedAt?: Date;
  _id: string;
  __v?: string;
}

export interface IParticipant {
  role: GroupUserRole;
  user: string | IUser;
  joinedAt: Date;
  _id: string;
}

export interface IConversation {
  participants: IParticipant[];
  name: string | null;
  isGroup: boolean;
  avatar: IExtendedImage | null;
  lastModify: Date;
  _id: string;
  __v?: string;
}

export interface IFriendship {
  sender: string | IUser;
  receiver: string | IUser;
  conversation: string | IConversation | null;
  accept: boolean;
  _id: string;
  __v?: string;
}

export interface IAnchorOrigin {
  horizontal?: "center" | "right" | "left";
  vertical?: "bottom" | "top";
}
