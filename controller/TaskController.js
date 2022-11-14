import data from "../data.js";



const TasksController ={
    getList: (req, res)=>{
        console.log(req.query);
        res.send(JSON.stringify(data))
    },
    getByid:(req,res)=>{
        for(let i=0; i<data.tasks.length;i++)
        {
            if(data.tasks[i].id==req.params.id)
            {
                res.send(JSON.stringify(data.tasks[i]));
            }
        }
    },
    Add:(req,res)=>{
        data.tasks.push(req.body);
        res.send(JSON.stringify(data));
    },
    Update:(req,res)=>{let i;
    //     for(i=0; i<data.tasks.length;i++){
    //         if(data.tasks[i].id==req.params.id)
    //         {
    //             data.tasks[i].name=req.body.name;
    //             data.tasks[i].priority=req.body.priority;
    //             data.tasks[i].status=req.body.status;
    //             data.tasks[i].duration=req.body.duration;
    //             break;
    //         }
    //     }
    //    // res.send(JSON.stringify(data.tasks[i]));
    //    res.send(JSON.stringify(data));
        for(let i in data.tasks){
            if(data.tasks[i].id==req.params.id)
            {
                for(let j in req.body)
                {
                    data.tasks[i][j]=req.body[j];
                }
            }
        }
        //res.send(JSON.stringify(data.tasks[i]));
       res.send(JSON.stringify(data));
    },
    Delete:(req,res)=>{
        for(let i in data.tasks)
        { if(data.tasks[i].id==req.params.id)
              data.tasks.splice(data.tasks[i],1);
        }
         
         res.send(JSON.stringify(data));
    }
    
}
export default TasksController;