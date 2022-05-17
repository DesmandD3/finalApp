import styled from "styled-components";

const Textbub2_2 = styled.div`
  width: 380px;
  height: auto;
  background-color: #41658a;
  color: #fefae0;
  font-size: 22px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  left: 1px;
  top: 350px;
  z-index: 3;
`;

export default function Text2Bubble2() {
  return (
    <div>
      <Textbub2_2>
        Living on the streets is scary, and I really don't know where I'll end
        up.
        <br />
        <br />
        Join me on my path, and let's focus on the story.
      </Textbub2_2>
    </div>
  );
}
