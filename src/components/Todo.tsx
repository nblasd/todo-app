"use client";
import React from "react";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import { addtodo } from "@/features/reducers/todoSlice";
import { Rootstate } from "@/types/types";

export default function Todo() {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const week = new Date().getDay();

  const weekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [data, setData] = React.useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state: Rootstate) => state.todoSlice.todos);

  const putHandler = () => {
    dispatch(addtodo(data));
    setData("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      putHandler();
    }
  };

  return (
    <main className="w-full  text-slate-200 text-center">
      <h1 className="font-extrabold text-8xl pt-20">ToDoList.</h1>
      <p className="pb-20">
        {date}/{month + 1}/{year} {weekNames[week]}
      </p>
      <div>
        <input
          type="text"
          onChange={(e) => setData(e.target.value)}
          value={data}
          onKeyDown={handleKeyPress}
          className="bg-slate-800  rounded-md w-1/4 h-10 rounded-r-none"
        />
        <button
          onClick={putHandler}
          className="bg-emerald-500 h-10 rounded-md w-16 rounded-l-none font-bold"
        >
          +Add
        </button>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center w-full my-12">
        {todos.map((items: { data: string }) => {
          return <List para={items} />;
        })}
      </div>
    </main>
  );
}
