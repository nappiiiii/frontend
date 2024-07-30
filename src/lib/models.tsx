export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  detail: string;
  info: string;
  category: string;
  is_published: boolean;
}

export interface Menu {
  id: number;
  name: string;
  price: number;
  detail: string;
}

export interface Order {
  id: number;
  name: string;
  amount: number;
  price: number;
  ps: string;
}