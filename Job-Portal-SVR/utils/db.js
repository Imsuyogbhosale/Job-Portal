import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);  // Remove `useNewUrlParser` and `useUnifiedTopology`
        console.log("DB connection successful");
    } catch (error) {
        console.log("Error connecting to DB:", error);
    }
};

export default connectDB;
