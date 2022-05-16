import React from "react";
import styled from "styled-components";

function Man3() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "absolute",
          top: 50,
          right: 10,
          zIndex: 3,
          objectFit: "contain",
        }}
        src="/Man.svg"
      />
    </div>
  );
}
export default Man3;
