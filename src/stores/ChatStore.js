// src/stores/ChatStore.js
import { observable, action, makeObservable } from "mobx";

class ChatStore {
  messages = [];
  completedMessages = [];

  constructor() {
    makeObservable(this, {
      messages: observable,
      completedMessages: observable,
      addMessage: action,
    });
  }

  addMessage(message) {
    this.messages.push(message);
  }
  addCompletedMessage(message) {
    this.messages = this.messages.filter((msg) => msg !== message);
    this.completedMessages.push(message);
  }
}

const chatStore = new ChatStore();
export default chatStore;
