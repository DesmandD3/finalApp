import React from "react";
import styled from "styled-components";

function Kuck() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "absolute",
          width: 300,
          left: -150,
          top: 100,
          zIndex: 3,
        }}
        src="/Knuckles.svg"
      />
    </div>
  );
}
export default Kuck;