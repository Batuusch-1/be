import { useEffect, useState } from "react";
export default function Home() {
  const [name, setName] = useState({ name: "hel" });
  const [age, setAge] = useState({ age: 15 });
  console.log(name);
  const fetcData = async () => {
    const response = await fetch("http://localhost:8080/", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
    });
    body: JSON.stringify({ a: 7, str: "hello" })
    // const res = await response.json();
    // console.log(res);
  };
  const addData = () => {
    console.log(name, age);
    fetcData();
    console.log(name);
    console.log(age);
  };
  // useEffect(() => {
  //   fetcData();
  // }, []);
  return (
    <main className="flex justify-center w-full h-full">
      <form
        action=""
        className="w-[300px] h-[200px] bg-slate-200 flex flex-col gap-5 items-center border border-black rounded-md"
      >
        <input
          className="border rounded-md border-black w-[200px] mt-5 px-2 py-1"
          onChange={(event) => setName({ name: event.target.value })}
          placeholder="Name"
          type="text"
        />
        <input
          className="border rounded-md border-black w-[200px] mt-1 px-2 py-1"
          onChange={(event) => setAge({ age: event.target.value })}
          type="text"
          placeholder="Age"
        />
        <button onClick={addData} className=" bg-blue-400 py-1 px-3 rounded-md">
          Submit
        </button>
      </form>
    </main>
  );
}
