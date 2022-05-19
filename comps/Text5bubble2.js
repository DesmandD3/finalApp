import styled from "styled-components";

const Textbub5_2 = styled.div`
  width: auto;
  height: auto;
  background-color: #41658a;
  color: #fefae0;
  font-size: 22px;
  margin: 8px;
  padding: 8px;
  border-radius: 10px;
  position: relative;
  left: 1px;
  top: 345px;
  z-index: 2;
`;

export default function Text5bubble2() {
  return (
    <div>
      <Textbub5_2>
        Resorting to crime is one way to cope with life on the streets. Engaging
        in crime can lead to violence or arrest, further perpetuating my
        downward spiral.
      </Textbub5_2>
      <Textbub5_2>Let's see what I do to get by.</Textbub5_2>
    </div>
  );
}
