import { useEffect, useState } from "react";
import "./Timer.css";
import { formatTime, MS_IN_MINUTE } from "./utils";
import { Button } from "@mui/material";

export const Timer = () => {
  const initialStudyTime = 25 * MS_IN_MINUTE;
  const initialRelaxTime = 5 * MS_IN_MINUTE;

  const [studyTime, setStudyTime] = useState(initialStudyTime);
  const [relaxTime, setRelaxTime] = useState(initialRelaxTime);

  const [studyActive, setStudyActive] = useState(true);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      if (studyActive) {
        setStudyTime((prev) => Math.max(0, prev - 1000));
      } else {
        setRelaxTime((prev) => Math.max(0, prev - 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [studyActive, paused]);

  return (
    <div className="timer">
      <h1>
        {formatTime(studyTime)} / {formatTime(relaxTime)}
      </h1>
      <Button
        variant="contained"
        onClick={() => {
          if (studyActive) {
            setStudyTime(initialStudyTime);
          } else {
            setRelaxTime(initialRelaxTime);
          }
        }}
      >
        Reset Timer
      </Button>
      <Button
        variant="contained"
        onClick={() => setStudyActive((prev) => !prev)}
      >
        Switch the countdown
      </Button>
      <Button variant="contained" onClick={() => setPaused((prev) => !prev)}>
        {paused ? "Play" : "Pause"}
      </Button>
    </div>
  );
};
