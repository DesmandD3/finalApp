import React from "react";
import styled from "styled-components";

function Man2() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "absolute",
          top: 175,
          right: 180,
          width: 300,
          zIndex: 3,
          objectFit: "contain",
        }}
        src="/Man.svg"
      />
    </div>
  );
}
export default Man2;
