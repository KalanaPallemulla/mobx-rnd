import { observer } from "mobx-react";
import React from "react";
import chatStore from "../stores/ChatStore";

const Completed = () => {
  return (
    <div>
      <h1>Completed messages</h1>
      {chatStore.completedMessages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
};

export default observer(Completed);
