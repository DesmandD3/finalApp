import React from "react";
import styled from "styled-components";

function Man4() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "absolute",
          width:200,
          top: 200,
          right: 200,
          zIndex: 3,
          objectFit: "contain",
        }}
        src="/Resu.svg"
      />
    </div>
  );
}
export default Man4;