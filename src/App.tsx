import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    WebApp.ready();
    WebApp.expand(); // optional
  }, []);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>📝 Your To-Do List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
