const { default: mongoose } = require("mongoose");

const connection = {};

export const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing Connection.....'");
      return;
    }
    console.log("creating a fresh new connection!");
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/NextJS_Blog");
    connection.isConnected = db.connections[0].readyState;
  } catch (err) {
    console.log("DB FETCHING ERROR: ", err);
    throw new Error(err);
  }
};
