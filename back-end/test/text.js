import fs from "fs"
const data = fs.readFileSync("text.txt");
console.log(data.toString());