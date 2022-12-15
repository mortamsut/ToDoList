import  express  from 'express';
import bodyParser from 'body-parser';
import TasksRouter  from './Routers/TasksRouter.js';
import FunctionRouter  from './Routers/FunctionRouter.js';
import cors from "cors";
import jwt from "jsonwebtoken";
import db from "./db.js";


const app = express()
const port = 3001;
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(cors());
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
const secret="JIs%WCfS#Sl454d5FX";
app.get("/hello",async (req,res)=>{
  let tasks=db.collection("tasks");
  let doc={name:"לשטוף כלים",status:'ToDo'};
  const result= await tasks.insert(doc);
  console.log('new task',result);

  const taskOne=await tasks.findOne({status:'ToDo'});
  console.log('taskOne',taskOne);

  res.send(taskOne);
});



// app.post('/login',(req,res)=>{

//   if(req.body.userName=="morTamsut"&& req.body.password=="325623627"){
//     const token=jwt.sign(
//     { userId:1,userName:"mor tamsut", roles:["user"] }, secret);
//     console.log('token',token);
//     res.send({accessToken: token});
//   }
//   else{
//     res.status(401).send({message:"unauthorized"});
//   }
// });


// app.use("/",(req,res,next)=>{
//   console.log("auth middleware");
//   console.log("req.header",req.headers);
//   const token=req.headers.authorization.slice(7);
//   console.log("token",token);
//   try{
//     const decoded=jwt.verify(token,secret);
//     console.log('decoded', decoded);
//     req.userId=decoded.userId;
//     next();
//   }
//   catch{
//     res.status(401).send({message: "unauthorized"});
//   }
// });


// app.use('/',auth);

// function middleware(req,res,next){
//   console.log('middleware');
//   if(req.query.stop==1)
//   {s
//     res.send('out');
//   }
//   else next();
// }

app.use ('/tasks',TasksRouter);
app.use('/fun',FunctionRouter);
// function auth(req,res,next){
//   let user='1234';
//   req.user=user;
//   next();
// }

app.listen(port, () => {
  console.log(`my app listening on port http://localhost:${port}`)
})
