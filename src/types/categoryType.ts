export type Category = {
  _id: string;
  name: string;
  icon?: React.ReactNode;
  value: string;
};

export type CategoryResponse = {
  success: boolean;
  data: Category[];
};


export interface SubCategory {
  _id: string;
  name: string;
  value: string;
  categoryId: string;
}

export interface SubCategoryResponse {
  success: boolean;
  data: SubCategory[];
}