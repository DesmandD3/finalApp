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

`;

export default function TextBubble() {
  return (
    <div>
      <Textbub>Hello There, My name is Kevin. I would like to share a story with you about my life, 
        How I got let go by my family, because I turned 18 years old today. 
</Textbub>
    </div>
  );
}
