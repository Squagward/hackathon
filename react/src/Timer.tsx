import { Button, ButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import "./Timer.css";
import { formatTime, MS_IN_MINUTE } from "./utils";

export const Timer = () => {
  const initialStudyTime = 25 * MS_IN_MINUTE;
  const initialBreakTime = 5 * MS_IN_MINUTE;

  const [timeLeft, setTimeLeft] = useState(initialStudyTime);
  const [paused, setPaused] = useState(true);
  const [shouldStudy, setShouldStudy] = useState(true);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1000));
      if (timeLeft <= 0) {
        if (shouldStudy) {
          setTimeLeft(initialBreakTime);
        } else {
          setTimeLeft(initialStudyTime);
        }
        setShouldStudy(!shouldStudy);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, paused]);

  return (
    <>
      <h1>{formatTime(timeLeft)}</h1>
      <h2>{shouldStudy ? "STUDY" : "TAKE A BREAK :)"}</h2>
      <div className="timer">
        <ButtonGroup>
          <Button
            variant="contained"
            onClick={() => {
              setTimeLeft(initialStudyTime);
            }}
          >
            Reset Timer
          </Button>
          <Button
            variant="contained"
            onClick={() => setPaused((prev) => !prev)}
          >
            {paused ? "Play" : "Pause"}
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};
