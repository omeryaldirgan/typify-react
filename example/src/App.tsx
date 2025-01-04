import React, { useState } from "react";
import { useTypewriter } from "typify-react";
import "./App.css";

const App = () => {
  const [words, setWords] = useState<string[]>(["Welcome to Typify React!", "Experience the Future!"]);
  const [loop, setLoop] = useState<number | boolean>(0);
  const [typeSpeed, setTypeSpeed] = useState(100);
  const [deleteSpeed, setDeleteSpeed] = useState(50);
  const [delaySpeed, setDelaySpeed] = useState(1500);

  const [text, { isType, isDelay, isDelete, isDone }] = useTypewriter({
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    onLoopDone: () => alert("All loops completed!"),
  });

  return (
    <div className="container">
      <h1>Typify React Example</h1>

      {/* Display Typing Effect */}
      <div className="output">
        <h2>{text}</h2>
        <p>
          <strong>Status:</strong>{" "}
          {isType
            ? "Typing"
            : isDelete
            ? "Deleting"
            : isDelay
            ? "Delay"
            : isDone
            ? "Done"
            : "Idle"}
        </p>
      </div>

      {/* Input Controls */}
      <div className="controls">
        <label>
          Words (comma separated):
          <input
            type="text"
            value={words.join(", ")}
            onChange={(e) => setWords(e.target.value.split(",").map((word) => word.trim()))}
          />
        </label>

        <label>
          Loop (0 for infinite):
          <input
            type="number"
            value={loop === 0 ? "" : loop}
            onChange={(e) => setLoop(Number(e.target.value) || 0)}
          />
        </label>

        <label>
          Type Speed (ms):
          <input
            type="number"
            value={typeSpeed}
            onChange={(e) => setTypeSpeed(Number(e.target.value))}
          />
        </label>

        <label>
          Delete Speed (ms):
          <input
            type="number"
            value={deleteSpeed}
            onChange={(e) => setDeleteSpeed(Number(e.target.value))}
          />
        </label>

        <label>
          Delay Speed (ms):
          <input
            type="number"
            value={delaySpeed}
            onChange={(e) => setDelaySpeed(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
};

export default App;
