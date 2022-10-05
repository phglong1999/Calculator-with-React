import { Button, styled } from "@mui/material";
import React from "react";

export default function CalButton({ text, color, onClick }) {
  const CustomButton = styled(Button)({
    width: "100%",
    borderRadius: 0,
    fontSize: "1.5rem",
    height: "100%",
  });
  return (
    <CustomButton variant="outlined" color={color} onClick={onClick}>
      {text}
    </CustomButton>
  );
}
