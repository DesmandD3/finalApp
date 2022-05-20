import React from "react";
import styled from "styled-components";

function Steal() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "absolute",
          width: 200,
          left: 70,
          top: 180,
          zIndex: 3,
        }}
        src="/Stealing.svg"
      />
    </div>
  );
}
export default Steal;