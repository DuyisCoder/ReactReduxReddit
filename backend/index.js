const express= require("express")
const app =express();

  
app.listen("9090",()=>{
    console.log("Server đang chạy");
})

app.get("/dogs",(req,res)=>{
    res.status(200).json(dogs);

})