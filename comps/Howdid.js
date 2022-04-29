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
          maxWidth:200,
          height:120,
          left: 130,
          top: 80,
          zIndex:1
        }}
        src="/How.svg"
      />
    </div>
  );
}
export default How;