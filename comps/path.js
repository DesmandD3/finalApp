import React from "react";
import styled from "styled-components";

function Path() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "relative",
          bottom: 270,
          left: 30,
          width: 800,
          height: 600,
          zIndex:1,
        }}
        src="/startPath.svg"
      />
    </div>
  );
}
export default Path;
