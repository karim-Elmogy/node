// const http= require('http');

// const users=[
//     {"name":"karim Elmogy","Email":"kimo72636@gmail.com","Age":"24"},
//     {"name":"karim Elmogy","Email":"kimo72636@gmail.com","Age":"24"},
//     {"name":"karim Elmogy","Email":"kimo72636@gmail.com","Age":"24"},
//     {"name":"karim Elmogy","Email":"kimo72636@gmail.com","Age":"24"},
//     {"name":"karim Elmogy","Email":"kimo72636@gmail.com","Age":"24"},
//     {"name":"karim Elmogy","Email":"kimo72636@gmail.com","Age":"24"},
// ];

// const server =  http.createServer((req,res)=>{
//     if(req.url == "/" && req.method =="GET"){
//         res.end(JSON.stringify(users));
//     }
//     else if(req.url=="/about" && req.method=="GET"){
//         res.end('api');
//     }else{
//         res.end('gfkgsgklsfg');
//     }
// })

// server.listen(3000,()=>{
//     console.log('server is running .... ')
// })

const express = require("express");
const app = express();


const users = [
  { name: "Karim Elmogy", Email: "kimo72636@gmail.com", Age: "24" },
  { name: "Karim Elmogy", Email: "kimo72636@gmail.com", Age: "24" },
  { name: "Karim Elmogy", Email: "kimo72636@gmail.com", Age: "24" },
  { name: "Karim Elmogy", Email: "kimo72636@gmail.com", Age: "24" },
  { name: "Karim Elmogy", Email: "kimo72636@gmail.com", Age: "24" },
  { name: "Karim Elmogy", Email: "kimo72636@gmail.com", Age: "24" },
  { name: "Karim Elmogy", Email: "kimo72636@gmail.com", Age: "24" },
  { name: "Karim Elmogy", Email: "kimo72636@gmail.com", Age: "24" },
  { name: "Karim Elmogy", Email: "kimo72636@gmail.com", Age: "24" },
  { name: "Karim Elmogy", Email: "kimo72636@gmail.com", Age: "24" },
  { name: "Karim Elmogy", Email: "kimo72636@gmail.com", Age: "24" },
  { name: "Karim Elmogy", Email: "kimo72636@gmail.com", Age: "24" },
  { name: "Karim Elmogy", Email: "kimo72636@gmail.com", Age: "24" },
  { name: "Karim Elmogy", Email: "kimo72636@gmail.com", Age: "24" },
  { name: "Karim Elmogy", Email: "kimo72636@gmail.com", Age: "24" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/file", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.send("Karim Elmogy");
});



app.post("/addUser",(req,res)=>{
  
  res.send("User Add Sussessfully");
});















app.listen(3000, () => {
  console.log("Server Is Running .... ");
});

