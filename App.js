import  express  from 'express';
import bodyParser from 'body-parser';
import TasksRouter  from './Routers/TasksRouter.js';


const app = express()
const port = 3001;
app.use(bodyParser.json());
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/',auth);
function middleware(req,res,next){
  console.log('middleware');
  if(req.query.stop==1)
  {
    res.send('out');
  }
  else next();
}
app.use ('/tasks',TasksRouter);
function auth(req,res,next){
  let user='1234';
  req.user=user;
  next();
}

app.listen(port, () => {
  console.log(`my app listening on port http://localhost:${port}`)
})
