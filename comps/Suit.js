import React from "react";
import styled from "styled-components";

function Suit() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "relative",
          width:380,
          top: 60,
          left:80,
          zIndex: 3,
          objectFit: "contain",
        }}
        src="/Suitman.svg"
      />
    </div>
  );
}
export default Suit;