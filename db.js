import {MongoClient} from "mongodb";

const uri="mongodb+srv://ToDoList:hanurit21@todolistcluster.kyjmrgr.mongodb.net/?retryWrites=true&w=majority"

const client= new MongoClient(uri);
const db = client.db('ToDoListCluster');
export default db;