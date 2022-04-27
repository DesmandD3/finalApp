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
      <Textbub2>This story is not happy, not only me, but alot of 18 years old get 
        kicked out of their house to earn a living without food, 
        shelter and other accomidations. Right now, lets focus on the story.</Textbub2>
    </div>
  );
}
