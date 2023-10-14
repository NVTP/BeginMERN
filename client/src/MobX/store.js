import { Todo,TodoList } from "./TodoAndList";

export const store = new TodoList([
    new Todo("Get Coffee"),
    new Todo("Write simpler code"),
    new Todo("Write")
  ]);