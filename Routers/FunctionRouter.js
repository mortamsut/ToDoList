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

router.get('/sortname',(req,res)=>{
    var sname= data.tasks.sort((a,b)=>{
        return a.name-b.name
    })
    res.send(sname);
})
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