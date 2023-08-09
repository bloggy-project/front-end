export interface Post {
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
