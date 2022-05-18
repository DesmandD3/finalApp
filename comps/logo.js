import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

function Logo({ path = "" }) {
  const r = useRouter();
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "fixed",
          width:50,
          top:7,
          objectFit: "contain",
        }}
        src="/pathfindersNewLogo.svg"
       onClick={() => r.replace({ pathname: path })}>

      </img>
    </div>
  );
}
export default Logo;
