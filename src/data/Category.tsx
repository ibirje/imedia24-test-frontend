export interface Category {
  name:string; 
  description: string, 
  image: string
  price: number;
  parentcategory?: Category;
}