import  express  from '../node_modules/express';
import TasksController from '../controller/TaskController.js';
 const router = express.Router();
 
 //Get-List
 router.get('/', TasksController.getList);

//GetById
router.get('/:id', TasksController.getByid);
 
//AddById
router.post('/', TasksController.Add);
 //updateById
 router.put('/:id', TasksController.Update);

//Delete
router.delete('/:id',TasksController.Delete );
export default router;