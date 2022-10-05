import { Grid } from "@mui/material";
import React from "react";
import CalButton from "../CalButton";

export default function ListButton(props) {
  // function caculate() {
  //   if (operator === "+") return pre + display;
  //   if (operator === "-") return pre - display;
  //   if (operator === "x") return pre * display;
  //   if (operator === "÷") return pre / display;
  // }

  // const numberClick = (e) => {
  //   setDisplay((prev) => parseFloat(prev + e.target.textContent));
  // };
  // const resetClick = (e) => {
  //   setDisplay(defaultValue);
  // };
  // const floatClick = (e) => {
  //   if (display.toString().indexOf(".") === -1)
  //     setDisplay((prev) => prev + e.target.textContent);
  // };
  // const perCent = () => {
  //   if (typeof display === "number") setDisplay((prev) => prev * 0.01);
  // };
  // const changeDau = () => {
  //   if (typeof display === "number") setDisplay((prev) => 0 - prev);
  // };
  // const operatorClick = (e) => {
  //   if (typeof pre === "number" && operator !== "") {
  //     setDisplay(caculate());
  //   }
  //   setOperator(e.target.textContent);
  //   setPre(display);
  // };
  // const result = () => {};
  return (
    <Grid container spacing={0}>
      {props.data.map((item) => (
        <Grid item xs={item.xs}>
          <CalButton color={item.color} text={item.text}></CalButton>
        </Grid>
      ))}
    </Grid>
  );
}
