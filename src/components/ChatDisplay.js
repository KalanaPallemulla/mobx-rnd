import React from "react";
import { observer } from "mobx-react";
import chatStore from "../stores/ChatStore";

const ChatDisplay = () => {
  const handleDoneTodo = (message) => {
    chatStore.addCompletedMessage(message);
  };
  return (
    <div>
      <h1>Todo messages </h1>
      {chatStore.messages.map((message, index) => (
        <div onClick={() => handleDoneTodo(message)} key={index}>
          {message}
        </div>
      ))}
    </div>
  );
};

export default observer(ChatDisplay);
