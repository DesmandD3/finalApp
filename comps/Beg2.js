import React from "react";
import styled from "styled-components";

function Beg2() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "absolute",
          top: 270,
          right: 80,
          width: 200,
          zIndex: 2,
          objectFit: "contain",
        }}
        src="/Begging.svg"
      />
    </div>
  );
}
export default Beg2;
