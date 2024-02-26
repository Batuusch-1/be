// const express =require("express")
import express, { request, response } from "express";
import cors from "cors";
import fs from "fs";
const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (request, response) => {
  // response.json(user);
  let obj = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  response.status(200).send(obj);
});
app.post("/", (request, response) => {
  let obj = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  let data = request.body;
  obj.push(data);
  fs.writeFileSync("data.json", JSON.stringify(obj));
  response.status(200).send(data);
  // user.push(request.body);
  // response.send(user);
  // obj.user.push(user);
  // fs.writeFileSync("data.json",JSON.stringify(user));
  console.log(data);
});

app.delete("/:index", (request, response) => {
  
  //INDEX R USGAH
  // let obj = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  // const index = parseInt(request.params.index);
  // if (index >= 0 && index < obj.length) {
  //   obj.splice(index, 1);
  //   fs.writeFileSync("data.json", JSON.stringify(obj));
  //   response.json(obj);
  //   console.log(obj);
  //   response.sendStatus(200);
  // } else {
  //   console.log("404 ajillahgui bn");
  // }
});
app.patch("/:index", (request, response) => {
  let obj = JSON.parse(fs.readFileSync("data.json", "utf-8"));
}),
app.listen(port, () => {
  console.log(`ene port http://localhost:${8080}/`);
});
