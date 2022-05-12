import React from "react";
import styled from "styled-components";

function Alcohol() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "absolute",
          width: 150,
          left: -70,
          top: 10,
          zIndex: 1,
        }}
        src="/Alcohol.svg"
      />
    </div>
  );
}
export default Alcohol;