import { Box, Grid, Input, Slider } from "@mui/material";
import { useState } from "react";

export const StartScreen = () => {
  const [studyTime, setStudyTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  return (
    <Box sx={{ width: 250 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>Study Time:</Grid>
        <Grid item xs>
          <Slider
            value={studyTime}
            onChange={(e, val) => {
              setStudyTime(val as number);
            }}
            step={1}
            min={0}
            max={60}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={studyTime}
            size="small"
            onChange={(e) => {
              setStudyTime(
                e.target.value === ""
                  ? 0
                  : Math.min(60, parseInt(e.target.value))
              );
            }}
            inputProps={{
              step: 1,
              min: 0,
              max: 60,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
        <Grid item>Break Time:</Grid>
        <Grid item xs>
          <Slider
            value={breakTime}
            onChange={(e, val) => {
              setBreakTime(val as number);
            }}
            step={1}
            min={0}
            max={60}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={breakTime}
            size="small"
            onChange={(e) => {
              setStudyTime(
                e.target.value === ""
                  ? 0
                  : Math.min(60, parseInt(e.target.value))
              );
            }}
            inputProps={{
              step: 1,
              min: 0,
              max: 60,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
