import styled from "styled-components";

const Textbub2 = styled.div`
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
  top: 360px;
`;

export default function Text2Bubble() {
  return (
    <div>
      <Textbub2>
        This story is not a happy one. I was kicked out of my house today. You
        may not know it but a lot of 18 years olds like me end up on the street.
        Without food, shelter or options, I don't know where I'll end up. Join
        me on my path, and let's focus on the story.
      </Textbub2>
    </div>
  );
}
