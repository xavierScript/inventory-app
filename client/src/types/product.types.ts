// export type IProduct = {
//   _id: string
//   name: string
//   description?: string
//   category: ICategory
//   brand?: IBrand
//   price: number
//   size?: string
//   stock: number
//   seller: ISeller
// }

export type IProduct = {
  _id: string;
  name: string;
  firstName: string;
  lastName: string;
  staffId: string;
  designation: string;
  location: string;
  block: string;
  roomNumber: string;
  serialNumber: string;
  status: string;
  issueDate: string | Date;
  description?: string;
  category?: ICategory;
  brand?: IBrand;
  price: number;
  size?: string;
  stock: number;
  seller: ISeller;
};

export interface ISeller {
  _id: string;
  name: string;
  email: string;
  contactNo: string;
}

export interface ICategory {
  _id: string;
  name: string;
}

export interface IBrand {
  _id: string;
  name: string;
}
