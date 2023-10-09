import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true); // We used this for our search functionality

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
