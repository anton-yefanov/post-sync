import mongoose from "mongoose";
import { IUser } from "./IUser";

const SubscriptionSchema = new mongoose.Schema(
  {
    id: { type: String },
    status: { type: String },
    priceId: { type: String },
    productId: { type: String },
    customerId: { type: String },
  },
  { _id: false },
);

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String },
  email: { type: String, unique: true, required: true },
  image: { type: String },
  subscription: { type: SubscriptionSchema, default: undefined },
});

export const User =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
