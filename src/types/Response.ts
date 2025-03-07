export type PaginationResponse<T> = {
  data: T[];
  links: Links;
  meta: Meta;
};

type Links = {
  first: string;
  last: string;
  prev: null;
  next: null;
};

export type Meta = {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

type Link = {
  url: null | string;
  label: string;
  active: boolean;
};
