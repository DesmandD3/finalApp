import React from "react";
import styled from "styled-components";

function Drug() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "absolute",
          width: 200,
          left: -190,
          top: 50,
          zIndex: 3,
        }}
        src="/Drug.svg"
      />
    </div>
  );
}
export default Drug;
