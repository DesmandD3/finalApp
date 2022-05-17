import styled from "styled-components";

const Textbub2 = styled.div`
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

export default function Text2Bubble() {
  return (
    <div>
      <Textbub2>
        This story is not a happy one. <br />I was kicked out of my house today.
        You may not know it but a lot of 18 years olds like me end up on the
        street, without food, shelter or options.
      </Textbub2>
    </div>
  );
}
