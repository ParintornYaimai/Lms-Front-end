export interface Category {
  _id: string;
  name: string;
  value: string;
}

export interface CategoriesResponse {
  success: boolean;
  data: Category[];
}

