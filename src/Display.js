import React from "react";

export default function Display({ display }) {
  return (
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
  );
}
