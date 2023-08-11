export interface PostUpload {
  thumbnail: string;
  title: string;
  content: string;
  subContent: string;
  tagNames: string[];
}

export interface TempPost {
  title: string;
  content: string;
  tagNames: string[];
  imageList: string[];
}

export interface PostGet {
  postId: number;
  thumbnail: string;
  title: string;
  subContent: null;
  content: string;
  name: string;
  tagNames: string[];
  modified: boolean;
  updatedAt: Date;
}
