export interface ProductDetails {
  title: string;
  subtitle: string;
  status: string;
  colorHex: string;
  description: string;
  detailItems: string[];
}

export interface Product {
  id: string;
  code: string;
  name: string;
  details: ProductDetails;
}
