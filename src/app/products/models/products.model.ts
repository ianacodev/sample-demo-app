export enum ValidatorTypes {
  Required = 'required',
  Minlength = 'minlength',
  Maxlength = 'maxlength',
  MaxDetails = 'maxDetails',
}

export enum ProductStatusTypes {
  Available = 'available',
  Unavailable = 'unavailable',
  'Low Supply' = 'lowSupply',
}

export enum ProductColorTypes {
  C1 = '#0C97A1',
  C2 = '#3F4040',
  C3 = '#607d8b',
}

export interface Option<T> {
  key: string;
  value: T;
}

export interface Product {
  id?: string;
  title: string;
  subtitle: string;
  status: string;
  color: string;
  description: string;
  details: string[];
}
