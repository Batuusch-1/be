import { useEffect, useState } from "react";
export default function Home() {
  const [name, setName] = useState("hel");
  const [age, setAge] = useState(15);
  const [data, setData] = useState([]);
  const fetcData = async () => {
    const response = await fetch("http://localhost:8080/", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    }).then((response) => response.json());
    // const res = await response.json();
    // console.log(res);
    setData(response);
  };

  const addData = () => {
    fetcData();
    // console.log(name);
    // console.log(age);
  };
  // console.log(name);
  // useEffect(() => {
  //   fetcData();
  // }, []);
  console.log(data);
  return (
    <main className="flex  w-full h-full flex-col items-center mt-10 gap-20">
      <div
        action=""
        className="w-[300px] h-[200px] bg-slate-200 flex flex-col gap-5 items-center border border-black rounded-md"
      >
        <input
          className="border rounded-md border-black w-[200px] mt-5 px-2 py-1"
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
          type="text"
        />
        <input
          className="border rounded-md border-black w-[200px] mt-1 px-2 py-1"
          onChange={(event) => setAge(event.target.value)}
          type="text"
          placeholder="Age"
        />
        <button onClick={addData} className=" bg-blue-400 py-1 px-3 rounded-md">
          Submit
        </button>
      </div>
      <div>
        {data.map((el) => {
          return (
            <div className="w-[200px] flex flex-col   ">
              {" "}
              <div className="*:py-1  *:border-black *:border *:rounded-md *:text-center flex gap-5 w-full *:px-3 py-1">
                <div>{el.name}</div>
                <div>{el.age}</div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
