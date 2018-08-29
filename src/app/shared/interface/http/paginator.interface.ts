export interface Paginator<T> {
  current_page: number;
  data: Array<T>;
  first_page_url: string;
  from: number;
  last_page: any;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: number;
  to: number;
  total: number;
}
