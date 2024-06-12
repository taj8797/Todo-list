"use client";

import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const deleteHandler = (i) => {
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");

    console.log(mainTask);
  };

  let renderTask = <h1>no task availabel</h1>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="flex items-center justify-between mb-5">
          <div className="flex item-center justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold mb-8">{t.title}</h5>
            <h5 className="text-xl font-semibold">{t.desc}</h5>
          </div>
          <button
            onClick={() => {deleteHandler(i)}}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-red-600 text-yellow-600 p-5 text-5xl font-bold  text-center">
        My Todo list
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Description here "
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5 ">
          Add task
        </button>
      </form>

      <hr />
      <div className="bg-slate-200  p-8">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;


