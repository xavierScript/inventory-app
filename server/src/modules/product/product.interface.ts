import { Types } from 'mongoose';

export interface IProduct {
  user: Types.ObjectId;
  name: string;
  firstName: string;
  lastName: string;
  staffId: string;
  designation: string;
  roomNumber: string;
  serialNumber: string;
  status: string;
  issueDate: string | Date;
  location: string;
  seller: Types.ObjectId;
  block: string;
  category: Types.ObjectId;
  brand?: Types.ObjectId;
  size?: string;
  price: number;
  stock: number;
  description: string;
}
