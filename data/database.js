import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendAPI",
    })
    .then((c) =>
      console.log(
        `Database Connected with ${c.connection.host}, to the '${c.connection.name}' database`
      )
    )
    .catch((e) => console.log(e));
};
