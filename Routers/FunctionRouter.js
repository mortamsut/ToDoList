import  express  from 'express';
import data from '../data.js';
const router=express.Router();

router.get('/map',(req,res)=>{  //מחזיר ערכים מסויימים של כל אוביקט
var mapname=data.tasks.map(t=>{
    return{id:t.id,name:t.name}
})
res.send(mapname);
})

router.get('/status',(req,res)=>{
 
    var stat=data.tasks.filter(t=> t.status=='ToDo');
    res.send(stat);  
    })
router.get('/catgory',(req,res)=>{
    var cat= data.tasks.filter(t=>t.category=='Home').map(t=> {return{id:t.id,catgory:t.category}})
    res.send(cat);
})

router.get('/sortname',(req,res)=>{//?????????????????????????????
    var sname= data.tasks.sort((a,b)=>{
        return a.name[0]-b.name[0]
    })
    res.send(sname);
})

router.get('/sortdur',(req,res)=>{
    var sname= data.tasks.sort((a,b)=>{
        return a.duration-b.duration
    })
    res.send(sname);
})

router.get('/sumcatgory',(req,res)=>{
    var sumcatgory=data.tasks.reduce((groupbycat,t)=>{
        if(!groupbycat[t.category])
        {groupbycat[t.category]=[]}
        groupbycat[t.category].push(t);

        return groupbycat;
    },{})
    res.send(sumcatgory);
})

router.get('/sumstatus',(req,res)=>{
    var sumstatus=data.tasks.reduce((groupbystatus,t)=>{
        if(!groupbystatus[t.status])
        groupbystatus[t.status]=[]
        groupbystatus[t.status].push(t);
        return groupbystatus;
    },{})
    res.send(sumstatus);
})
const max=0;
router.get('/maxtask',(req,res)=>{
    var maxtask=data.tasks.find(t=>{
        if(t.duration>max)
           {max=t.duration
          return t;
        }
     
    })
   res.send(maxtask);
})


// const sum=0;
// router.get('/sumLength',(req,res)=>{
//      sum += data.tasks.
// })
export default router;




//להחזיר רק את שם ותיאור המשימות

//לסנן לפי סטטוס
//לסנן לפי קטגוריה

//למיין לפי שם
//למיין לפי אורך

//לקבץ לפי קטגוריה
//לקבץ לפי סטטוס

//למצוא את המשימה הכי ארוכה
//לסכום את הזמן שלקחו כל המשימות שהסתיימו
//כמה משימות יש לכל משתמש


//לשרשר לפונקציות הנ"ל כמה פונקציות כמו map, filter, sort וכו's