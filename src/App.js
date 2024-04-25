import React from "react";
import ChatInput from "./components/ChatInput";
import ChatDisplay from "./components/ChatDisplay";
import Completed from "./components/Completed";
import TodoDisplay from "./components/TodoDisplay";

function App() {
  return (
    <div>
      <ChatDisplay />
      <Completed />
      <ChatInput />
      <TodoDisplay />
    </div>
  );
}

export default App;
