import React from "react";
import styled from "styled-components";

function How() {
  return (
    <div>
      <img
        style={{
          overflow: "hidden",
          display:"flex",
          position:"absolute",
          maxWidth:300,
          height:160,
          left: 80,
          top: 80,
          zIndex:1
        }}
        src="/How.svg"
      />
    </div>
  );
}
export default How;