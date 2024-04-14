require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");

const connectionString = process.env.CONNECTION_STRING;

const client = new MongoClient(connectionString, {
 //  useNewUrlParser: true,
 //  useUnifiedTopology: true,
 serverApi: ServerApiVersion.v1,
});

async function main() {
 await client.connect();

 const database = client.db(process.env.DATABASE);
 const tasksCollection = database.collection("mycollection");
 const myCollection = await tasksCollection.find().toArray();

 console.table(myCollection);

 //  const deleteResult = await tasksCollection.deleteOne();
 //  console.log(deleteResult);

 const task = {
  name: "task1",
  inCompleted: false,
  createdAt: new Date(),
 };

 const insertResult = await tasksCollection.insertOne(task);
 console.log(insertResult);

 console.log();
}

main()
 .then(console.log)
 .catch(console.error)
 .finally(() => client.close());
