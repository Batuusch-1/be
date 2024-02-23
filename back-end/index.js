// const express =require("express")
import express, { request, response } from "express";
import cors from "cors";

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

let user = [
  {
    name: "Batuusch",
    age: 25,
  },
];
app.get("/", (request, response) => {
  response.json(user);
});
app.post("/", (request, response) => {
  user.push(request.body);
  console.log(request.body);
  response.send(user);
  let data = fs.readFileSync("data.json");
  console.log(data)
  let obj = JSON.parse(data);
  obj.user.push(request.body);
  fs.writeFileSync("data.json",JSON.stringify(obj ));
});

app.delete("/", (request, response) => {
  response.send(user.pop());
});
app.listen(port, () => {
  console.log(`ene port http://localhost:${8080}/`);
});

