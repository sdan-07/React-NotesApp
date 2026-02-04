import React, { useState } from "react";
import DisplayNotes from "./components/DisplayNotes";

const App = () => {
  const [title, setTitle] = useState(``);
  const [desc, setDesc] = useState(``);
  // const [savedDesc, setsavedDesc] = useState(``)
  // const [savedTitle, setsavedTitle] = useState(``);
  const [data, setData] = useState([]);
  //const [Cards, setCards] = useState(false)

  const copyData = [...data];
  // data.push({title, desc})

  return (
    <div className="parent flex flex-col md:flex-row m-7 p-4 md:scale-95 ">
      <div className="note-form mr-0 md:mr-12">
        <h1 className="flex justify-center text-2xl md:text-3xl">Your Notes</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(copyData);
            setData((prev) => [...prev, { title, desc }]);

            setDesc(``);
            setTitle(``);
          }}
        >
          <input
            className="py-5 rounded-xl"
            type="text"
            placeholder="Enter Title here..."
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <input
            className="py-5 md:py-12 rounded-xl"
            type="text"
            placeholder="Enter Details here..."
            required
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <button className="px-3 py-3 md:py-4.5 bg-white text-black text-sm md:text-lg active:scale-95 rounded-xl border-2 my-9 md:my-12 w-full">
            
            Submit
          </button>
        </form>
      </div>

      <hr className="h-0 md:h-screen border-2 mt-4 md:mt-0" />
      

      <div className="show-notes md:ml-12">
        <h1 className="mt-6 text-2xl md:text-3xl">Recent Notes</h1>

        <div className="mt-12 grid gap-8 justify-center grid-cols-1 md:grid-cols-3">
          {data.map(function ({ title, desc }, idx) {
            return <DisplayNotes key={idx} title={title} desc={desc} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
