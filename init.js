const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
main().then(() =>{
   console.log('Connected Successfully!');
  }
).catch((err)=>{
  throw err;
  console.log(err);
});


async function main(){
  await 
  mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let allChats=[{
//   from:"Sneha",
//   to:"Priya",
//   msg:"Teacher aagyi kya??Class started?",
//   created_at:new Date(),
// },
// {
//   from:"Lokesh",
//   to:"Suhani",
//   msg:"Can you pleased send me the notes of yesterday?",
//   created_at:new Date(),
// },
// {
//   from:"Jaspreet",
//   to:"Shobhit",
//   msg:"Aur bhaai,kya haal hai?Bada busy rhta hai tu bhaai..",
//   created_at:new Date(),
// },
// {
//   from:"Punit",
//   to:"Supriya",
//   msg:"No class of Engineering maths would take place as the teacher is on leave.",
//   created_at:new Date(),
// },
// {
//   from:"Jiya",
//   to:"Hetal",
//   msg:"Tune kal jo sabji laai thi paneer ki..bohot mast thi..recipe degi kyaa?",
//   created_at:new Date(),
// },
// ];
// chat.insertMany(allChats);