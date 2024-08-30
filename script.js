const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
const methodOveride=require("method-override");
app.use(methodOveride("_method"));
main().then(() =>{
   console.log('Connected!');
  }
).catch((err)=>{
  console.log(err);
});

app.use(express.urlencoded({extended:true}));
async function main(){
  await 
  mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.static("public"));
app.listen(port,()=>{
  console.log("app is listening to the port!");
});
//create route
app.get('/chats',async (req,res)=>{
let chats=await Chat.find();
res.render('index',{chats});
});
app.get('/',(req,res)=>{
  res.send("Output generated successfully!");
});
//new route
app.get('/chats/new',(req,res)=>{
  res.render('new');
});
//save new data
app.post("/chats",(req,res)=>{
  let {from,msg,to}=req.body;
  let newMsg=new Chat({
    from:from,
    msg:msg,
    to:to,
    created_at:new Date()
  });
  newMsg.save().then((res)=>{
    console.log(res);
    console.log("The chat was saved");
  }).catch((err)=>{
    console.log(err);
  });
  res.redirect("/chats");
});
//edit route
app.get("/chats/:id/edit",async (req,res)=>{
  let {id}=req.params;
  let chat=await Chat.findById(id);
  res.render('edit',{chat});
});
app.put("/chats/:id", async(req,res)=>{
  let {id}=req.params;
  let {msg:newMsg}=req.body;
  let updatedChat=await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true},{new:true});
  res.redirect("/chats");
});
//delete the message
app.delete("/chats/:id",async (req,res)=>{
  let {id}=req.params;
  let deletedChat=await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
})