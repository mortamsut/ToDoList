import  express  from 'express';
import bodyParser from 'body-parser';
import TasksController from './controller/TaskController.js';

const app = express()
const port = 3001;
app.use(bodyParser.json());
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//Get-List
app.get('/tasks/', TasksController.getList);

//GetById
app.get('/tasks/:id', TasksController.getByid);
 
//AddById
app.post('/tasks/', TasksController.Add);
 //updateById
app.put('/tasks/:id', TasksController.Update);

//Delete
app.delete('/tasks/:id',TasksController.Delete );

app.listen(port, () => {
  console.log(`my app listening on port http://localhost:${port}`)
})
