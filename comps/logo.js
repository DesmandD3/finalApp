import React from "react";
import styled from "styled-components";

function Logo() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "relative",
          objectFit: "contain",
        }}
        src="/pathfindersNewLogo.svg"
      />
    </div>
  );
}
export default Logo;
