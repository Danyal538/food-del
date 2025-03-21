import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect("mongodb+srv://fooduser:fooduser12345@cluster0.r1shn.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=Cluster0"
    ).then(() => console.log("DB connected"))
}