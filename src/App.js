import "./App.css";
import { Box } from "@mui/material";
import { useState } from "react";
import ListButton from "./Button/ListButton";

function App() {
  const data = [
    [
      {
        xs: 3,
        text: "AC",
        color: "secondary",
      },
      {
        xs: 3,
        text: "+/-",
        color: "secondary",
      },
      {
        xs: 3,
        text: "%",
        color: "secondary",
      },
      {
        xs: 3,
        text: "÷",
        color: "warning",
      },
    ],
    [
      {
        xs: 3,
        text: "7",
        color: "secondary",
      },
      {
        xs: 3,
        text: "8",
        color: "secondary",
      },
      {
        xs: 3,
        text: "9",
        color: "secondary",
      },
      {
        xs: 3,
        text: "x",
        color: "warning",
      },
    ],
    [
      {
        xs: 3,
        text: "4",
        color: "secondary",
      },
      {
        xs: 3,
        text: "5",
        color: "secondary",
      },
      {
        xs: 3,
        text: "6",
        color: "secondary",
      },
      {
        xs: 3,
        text: "-",
        color: "warning",
      },
    ],
    [
      {
        xs: 3,
        text: "1",
        color: "secondary",
      },
      {
        xs: 3,
        text: "2",
        color: "secondary",
      },
      {
        xs: 3,
        text: "3",
        color: "secondary",
      },
      {
        xs: 3,
        text: "+",
        color: "warning",
      },
    ],
    [
      {
        xs: 6,
        text: "0",
        color: "secondary",
      },
      {
        xs: 3,
        text: ".",
        color: "secondary",
      },
      {
        xs: 3,
        text: "=",
        color: "warning",
      },
    ],
  ];
  const defaultValue = 0;
  const [display, setDisplay] = useState(defaultValue);
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#858694",
          width: "100%",
        }}
      >
        <div
          style={{
            textAlign: "right",
            fontSize: "2.5rem",
            padding: ".2rem .7rem .1rem .5rem",
            fontWeight: 200,
            color: "white",
          }}
        >
          {display}
        </div>
      </Box>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", flexGrow: 1, width: "100%" }}
      >
        {data.map((item) => (
          <ListButton data={item} />
        ))}
      </Box>
    </Box>
  );
}

export default App;
