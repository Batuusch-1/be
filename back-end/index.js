// const express =require("express")
import express from "express";
import cors from "cors";
let array = [
  {
    name: "Batuusch",
    age: 25,
    lastname: "L",
    id: 1,
  },
  {
    name: "Bat",
    age: 20,
    lastname: "C",
    id: 2,
  },
  {
    name: "Temka",
    age: 15,
    lastname: "A",
    id: 3,
  },
  {
    name: "Bold",
    age: 21,
    lastname: "E",
  },
  {
    name: "Sambuu",
    age: 22,
    lastname: "D",
    id: 4,
  },
];
let secondArray = [
  {
    name: "Dorj",
    age: 22,
    lastname: "D",
    id: 4,
  },
  {
    name: "Tsogt",
    age: 22,
    lastname: "D",
    id: 4,
  },
];

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (request, response) => {
  response.json(array);
});
app.post("/", (request, response) => {
  console.log(request.body);
});
// app.delete("/", (request, response) => {
//   response.send();
// });
app.listen(port, () => {
  console.log(`ene port http://localhost:${8080}/`);
});
