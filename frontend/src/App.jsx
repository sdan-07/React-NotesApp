import React, { useState } from "react";
import DisplayNotes from "./components/DisplayNotes";
import axios from "axios";
import { useEffect } from "react";

const App = ({ baseUrl }) => {
  const [title, setTitle] = useState(``);
  const [description, setDescription] = useState(``);

  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    await axios.get(`${baseUrl}/notelies`)
    .then((res) => {
      console.log(res.data);
      setNotes(res.data.notes);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`${baseUrl}/create-note`, {
        title: title,
        description: description,
      })
      .then((res) => {
        console.log("note added");
        
        setDescription(``);
        setTitle(``);
        fetchNotes();
      });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="parent flex flex-col md:flex-row m-7 p-4 md:scale-95 ">
      <div className="note-form mr-0 md:mr-12">
        <h1 className="font1 flex justify-center text-[42px] md:text-5xl italic mb-4">Notely</h1>

        <form onSubmit={handleSubmit}>
          <input
            className="py-5 rounded-xl"
            type="text"
            name="title"
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
            name="descriptionription"
            placeholder="Enter Details here..."
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            type="submit"
            className="px-3 py-3 md:py-4.5 bg-white text-black text-sm md:text-lg active:scale-95 rounded-xl border-2 my-9 md:my-12 w-full cursor-pointer hover:bg-slate-200"
            onSubmit={fetchNotes}
          >
            Submit
          </button>
        </form>
      </div>

      <hr className="h-0 md:h-screen border-2 mt-4 md:mt-0 hidden" />
      
      <div className="show-notes md:ml-12 lg:w-[75vw]">
        <div className="flex justify-between ">
          <h1 className="mt-6 font-medium! text-2xl md:text-3xl italic">Your Notes</h1>
          <button 
          type="button" 
          onClick={async()=>{
            const confirmed = window.confirm('Are you sure you want to delete all notes?')
            if(confirmed){
              await axios.delete(`${baseUrl}/delete-all`)
                .then((res)=>{
                  fetchNotes();
                })
              } 
            }
          }
          className="border rounded-lg p-3 lg:p-4 scale-75 mt-4 lg:mt-3 lg:scale-90"
          >
            <svg
              className="w-6 h-6 fill-current text-white"
              viewBox="0 -0.5 21 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z"
                transform="translate(-179, -360) translate(56, 160) translate(0, 0)"
              />
            </svg>
          </button>
        </div>

        <div className="mt-12 grid gap-8 justify-center grid-cols-1 md:grid-cols-3">
          {notes.map((note, _id) => {
            return (
              <DisplayNotes
                key={_id}
                title={note.title}
                desc={note.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
