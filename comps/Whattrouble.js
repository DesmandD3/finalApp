import React from "react";
import styled from "styled-components";

function Whattrouble() {
  return (
    <div>
      <img
        style={{
          overflow: "hidden",
          display:"flex",
          position:"absolute",
          maxWidth:200,
          height:100,
          left: 100,
          top: 80,
          zIndex:1
        }}
        src="/Whattrouble.svg"
      />
    </div>
  );
}
export default Whattrouble;