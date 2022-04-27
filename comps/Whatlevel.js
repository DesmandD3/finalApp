import React from "react";
import styled from "styled-components";

function Whatlevel() {
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
        src="/Whatlevel.svg"
      />
    </div>
  );
}
export default Whatlevel;