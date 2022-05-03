import React from "react";
import styled from "styled-components";

function Beg1() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "absolute",
          top: 350,
          right: 200,
          width: 200,
          zIndex: 1,
          objectFit: "contain",
        }}
        src="/Begging.svg"
      />
    </div>
  );
}
export default Beg1;