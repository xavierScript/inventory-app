import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';

const productSchema = new Schema<IProduct>(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    seller: { type: Schema.Types.ObjectId, required: true, ref: 'Seller' },
    category: { type: Schema.Types.ObjectId, required: true, ref: 'category' },
    name: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    staffId: { type: String, required: true },
    serialNumber: { type: String, required: true },
    status: { type: String, required: true },
    issueDate: { type: Date, required: true },
    roomNumber: { type: String, required: true },
    designation: { type: String, required: true },
    location: { type: String, required: true },
    block: { type: String, required: true },
    size: { type: String, enum: ['SMALL', 'MEDIUM', 'LARGE'] },
    brand: { type: Schema.Types.ObjectId, ref: 'brand' },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    description: { type: String }
  },
  { timestamps: true }
);

const Product = model<IProduct>('product', productSchema);
console.log('Product', Product);
export default Product;
