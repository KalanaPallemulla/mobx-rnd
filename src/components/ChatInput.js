import React, { useState } from "react";
import { observer } from "mobx-react";
import chatStore from "../stores/ChatStore";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    chatStore.addMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default observer(ChatInput);
