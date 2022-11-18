/*No es una buena práctica el meter un objeto dentro de otro objeto*/

export interface Address {
  street: string;
  number: number;
  zip: string;
}

export interface User {
  name: string;
  age: number;
  country: string;
  address: Address;
  admin: boolean;
}
