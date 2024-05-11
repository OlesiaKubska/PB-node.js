// npm init
// npm install dotenv
// npm install mongodb

require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const client = new MongoClient(process.env.CONNECTION_STRING, {
 serverApi: ServerApiVersion.v1,
});

async function main() {
 await client.connect();
 const database = client.db(process.env.DATABASE_NAME);
 const taskCollection = database.collection("tasks");

 //  const task = await taskCollection.find().toArray();
 //  console.table(task);

 //  const correctCount = await taskCollection.countDocuments();
 //  const estimsCount = await taskCollection.estimatedDocumentCount();
 //  console.log(
 //   "Correct count" + correctCount + ", estimated count" + estimsCount
 //  );

 let pageNumber = 2;
 const documentsPerPage = 5;

 const completedTask = await taskCollection
  .find({
   isCompleted: true,
  })
  .sort({ _id: -1 })
  .skip((pageNumber - 1) * documentsPerPage)
  .limit(documentsPerPage)
  .project({ _id: 0 })
  .toArray();

 //  const completedTask2 = await taskCollection.find({
 //   isCompleted: { $eq: true },
 //  }).toArray;
 //  console.table(completedTask2);

 console.table(completedTask);

 const completedTaskCount = await taskCollection.countDocuments({
  isCompleted: true,
 });

 const totalPageNumber = Math.ceil(completedTaskCount / documentsPerPage);

 console.log(
  "Total count of pages with documents fullfilling given query: " +
   totalPageNumber
 );

 //  // nie na więcej danych
 //  const isMoreDataAvailable = true;
 //  if (completedTask.length < documentsPerPage) {
 //   isMoreDataAvailable = false;
 //  }
}

main()
 .then(console.log("db connection works fine"))
 .catch(console.error)
 .finally(() => client.close());
