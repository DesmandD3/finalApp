import React from "react";
import styled from "styled-components";

function Shadow() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "relative",
          width: 400,
          left: 1,
          top: 140,
          zIndex: 3,
        }}
        src="/Shrug_.svg"
      />
    </div>
  );
}
export default Shadow;