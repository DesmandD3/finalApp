import React from "react";
import styled from "styled-components";

function Man() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "absolute",
          top: 75,
          right: 10,
          zIndex: 3,
          objectFit: "contain",
        }}
        src="/Man.svg"
      />
    </div>
  );
}
export default Man;
