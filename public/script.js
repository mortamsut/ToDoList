fetch('http://localhost:3001', 
{method:'POST'}, 
{
    name:'משימה חדשה',
    status:'ToDo'
}).then(res=>{
    console.log(res);
})