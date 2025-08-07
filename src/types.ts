export type ProductType ={
  id: string | number;
  name: string;
  shortDescription: string;
  price: number;
  size: string[];
  colors: string[];
  image: Record<string, string>;
};

export type ProductsType = ProductType[];