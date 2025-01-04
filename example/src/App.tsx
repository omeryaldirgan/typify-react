import { useState } from "react";
import { useTypewriter } from "typify-react";
import "./App.css";
import logo from "./logo.svg";

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
    onLoopDone: () => console.log("All loops completed!"),
  });

  return (
    <div className="app-container">
      <header className="app-header">
        <img
          src={logo}
          alt="Typify React Logo"
          className="app-logo"
        />
        <h1>Typify React</h1>
      </header>

      <main className="app-main">
        {/* Display Typing Effect */}
        <div className="output">
          <h2 className="output-text">{text}</h2>
          <p className="output-status">
            <strong>Status:</strong> {isType ? "Typing" : isDelete ? "Deleting" : isDelay ? "Delay" : isDone ? "Done" : "Idle"}
          </p>
        </div>

        {/* Input Controls */}
        <div className="controls">
          <div className="control-item">
            <label htmlFor="words">Words (comma separated):</label>
            <input
              id="words"
              type="text"
              value={words.join(", ")}
              onChange={(e) => setWords(e.target.value.split(",").map((word) => word.trim()))}
              placeholder="Enter words, separated by commas"
            />
          </div>

          <div className="control-item">
            <label htmlFor="loop">Loop (0 for infinite):</label>
            <input
              id="loop"
              type="number"
              value={loop === 0 ? "" : loop as string | number}
              onChange={(e) => setLoop(Number(e.target.value) || 0)}
              placeholder="0 for infinite"
            />
          </div>

          <div className="control-item">
            <label htmlFor="typeSpeed">Type Speed (ms):</label>
            <input
              id="typeSpeed"
              type="number"
              value={typeSpeed}
              onChange={(e) => setTypeSpeed(Number(e.target.value))}
              placeholder="Type speed in ms"
            />
          </div>

          <div className="control-item">
            <label htmlFor="deleteSpeed">Delete Speed (ms):</label>
            <input
              id="deleteSpeed"
              type="number"
              value={deleteSpeed}
              onChange={(e) => setDeleteSpeed(Number(e.target.value))}
              placeholder="Delete speed in ms"
            />
          </div>

          <div className="control-item">
            <label htmlFor="delaySpeed">Delay Speed (ms):</label>
            <input
              id="delaySpeed"
              type="number"
              value={delaySpeed}
              onChange={(e) => setDelaySpeed(Number(e.target.value))}
              placeholder="Delay speed in ms"
            />
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ by Omer Yaldirgan</p>
      </footer>
    </div>
  );
};

export default App;
