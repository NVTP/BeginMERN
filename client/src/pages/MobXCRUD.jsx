import * as React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { makeObservable, observable, computed, action } from "mobx";
// import { Todo } from "../MobX/TodoAndList";
import { store } from "../MobX/store";
import { Todo } from "../MobX/TodoAndList";
import { Checkbox } from "@mui/material";

let datas = "";

export const TodoListView = observer(({ todoList }) => (
  <div>
    <ul>
      {todoList.todos.map((todo) => (
        <TodoView todo={todo} key={todo.id} />
      ))}
    </ul>
    Tasks left: {todoList.unfinishedTodoCount}
    <input onChange={handleChange} style={{ marginLeft: "2rem" }}></input>
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <button onClick={addData}>Click me</button>
      <button onClick={deleData}>Delete</button>
    </div>
  </div>
));

const TodoView = observer(({ todo }) => (
  <li>
    <Checkbox
      checked={todo.finished}
      onChange={() => todo.toggle()}
      inputProps={{ "aria-label": "controlled" }}
    />
    {todo.title}
  </li>
));

const handleChange = (e) => {
  datas = e.target.value;
};

const addData = () => {
  if (store.findDuplicate(datas) == undefined) {
    const value = new Todo(datas);
    store.todos.push(value);
  } else {
    alert("Duplicate");
    console.log("duplicate ", store.findDuplicate(datas));
  }
};

const deleData = () => {
  store.removeData();
  // store.todos.filter((todo) => todo.finished == false);
};

// render(<TodoListView todoList={store} />, document.getElementById("root"));
