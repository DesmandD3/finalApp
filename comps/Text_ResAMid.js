import styled from "styled-components";

const TextbubResMid = styled.div`
  width: auto;
  height: auto;
  background-color: #41658a;
  color: #fefae0;
  font-size: 22px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  left: 1px;
  top: 380px;
  z-index: 3;
`;

export default function TextResMid() {
  return (
    <div>
      <TextbubResMid>
        This level shows that Kevin is living a relatively dangerous life. He is
        engaging in petty crime sporadically and resorting to alcohol abuse to
        cope with hardships. Kevin is clearly walking a dangerous path without
        positive guidance.{" "}
      </TextbubResMid>
    </div>
  );
}
