// api.js
import faunadb from "faunadb";

const client = new faunadb.Client({
  secret: process.env.REACT_APP_FAUNADB_SECRET,
});
const q = faunadb.query;

export const getProducts = async () => {
  try {
    const res = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("Products"))),
        q.Lambda("ref", q.Get(q.Var("ref")))
      )
    );
    // Map over the results and return the data
    return res.data.map((doc) => ({
      name: doc.data.name,
      price: doc.data.price,
      quantity: doc.data.quantity,
      imageUrl: doc.data.imageUrl,
    }));
  } catch (err) {
    console.error("Error fetching products from FaunaDB", err);
    throw err; // Re-throw the error so you can catch it in App.js
  }
};
