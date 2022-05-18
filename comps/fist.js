import React from "react";
import styled from "styled-components";

function Fist() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "absolute",
          width: 200,
          left: 10,
          top: 300,
          zIndex: 3,
        }}
        src="/fist.svg"
      />
    </div>
  );
}
export default Fist;