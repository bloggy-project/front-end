export interface Pages {
  content: Array<Content>;
  pageable: Pageable;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface Content {
  postId: number;
  title: string;
  content: string;
  username: string;
  createdAt: string;
  commentCount: number;
  favoriteCount: number;
  thumbnail: string;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageSize: number;
  pageNumber: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}
