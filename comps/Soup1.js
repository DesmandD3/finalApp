import React from "react";
import styled from "styled-components";

function Soup1() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "absolute",
          width: 300,
          left: 50,
          top: 200,
          zIndex: 3,
        }}
        src="/Soup.svg"
      />
    </div>
  );
}
export default Soup1;