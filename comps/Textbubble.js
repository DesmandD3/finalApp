import styled from "styled-components";

const Textbub = styled.div`
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

export default function TextBubble() {
  return (
    <div>
      <Textbub>
        Hi, my name is Kevin. <br /> Today is my eighteenth birthday, and my
        future outlook is uncertain. Let me share my story with you.
      </Textbub>
    </div>
  );
}
