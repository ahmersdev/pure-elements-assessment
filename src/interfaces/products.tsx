export interface Product {
  id: number;
  title: string;
  sale_price: string;
  regular_price: string;
  cover_image: string;
  variants: {
    id: number;
    sku: string;
    quantity: number;
    size: string;
  }[];
}
