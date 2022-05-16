import React from "react";
import styled from "styled-components";

function GarbageBin() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "absolute",
          top: 80,
          left: 30,
          width: 350,
          objectFit: "contain",
        }}
        src="/GarbageBin.svg"
      />
    </div>
  );
}
export default GarbageBin;
