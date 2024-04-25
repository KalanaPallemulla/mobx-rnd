// src/stores/ChatStore.js
import axios from "axios";
import { observable, action, makeObservable } from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,

      addTodos: action,
    });
  }

  async addTodos() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      if (res.status === 200) {
        console.log(res);
        this.todos = res.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const todoStore = new TodoStore();
export default todoStore;
