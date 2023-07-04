require("dotenv").config();
const { MongoClient } = require("mongodb");

const DATABASE_URL = process.env.DATABASE_URL;

let client;

const getDB = () => {
  if (!client) {
    console.log("Creating a new client!");
    client = new MongoClient(DATABASE_URL);
  } else {
    console.log("Reusing the old client");
  }

  const database = client.db("nike-api");
  const products = database.collection("products");
  const orders = database.collection("orders");

  return {
    products,
    orders,
  };
};

module.exports = getDB;
