export interface ProductDetails {
  title: string;
  subtitle: string;
  colorHex: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  details: ProductDetails;
}
