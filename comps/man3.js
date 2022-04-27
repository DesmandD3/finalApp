import React from "react";
import styled from "styled-components";

function Man3() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "absolute",
          top: -10,
          right: 10,
          zIndex: 1,
          objectFit: "contain",
        }}
        src="/Man.svg"
      />
    </div>
  );
}
export default Man3;