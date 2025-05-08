import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  image: string;
  subscription?: {
    id: string;
    status: string;
    productId: string;
    priceId: string;
    customerId: string;
  };
}
