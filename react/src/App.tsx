import { Button, Divider } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { StartScreen } from "./StartScreen";
import { TaskList } from "./TaskList";
import { Timer } from "./Timer";

function App() {
  const [started, setStarted] = useState(false);
  return (
    <div className="App">
      {started ? (
        <>
          <Timer />
          <Divider sx={{ margin: "10px" }} />
          <TaskList />
        </>
      ) : (
        <>
          <StartScreen />
          <Button
            onClick={() => {
              setStarted(true);
            }}
          >
            Begin!
          </Button>
        </>
      )}
    </div>
  );
}

export default App;
