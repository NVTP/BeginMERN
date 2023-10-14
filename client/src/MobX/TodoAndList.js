
import { makeObservable, observable, computed, action } from "mobx";

export class Todo {
    id = Math.random();
    title = "";
    finished = false;
  
    constructor(title) {
      makeObservable(this, {
        title: observable,
        finished: observable,
        toggle: action
      });
      this.title = title;
    }
  
    toggle() {
      this.finished = !this.finished;
    }
  }

export class TodoList {
    todos = [];
    datass = "";
    get unfinishedTodoCount() {
      return this.todos.filter((todo) => !todo.finished).length;
    }
  
    constructor(todos, datass) {
      makeObservable(this, {
        todos: observable,
        unfinishedTodoCount: computed,
        findDuplicate: observable,
        datass: observable,
        removeData: observable
      });
      this.todos = todos;
      this.datass = datass;
    }
  
    findDuplicate(datass) {
      return this.todos.find((todo) => todo.title == datass);
    }
  
    removeData() {
      // this.todos.forEach((e) => console.log(e));
      var aa = this.todos.filter((todo) => todo.finished == false);
      // console.log(aa);
      return (this.todos = aa);
      // return this.todos.filter((todo) => todo.finished == false);
    }
  }

