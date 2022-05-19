import styled from "styled-components";

const TextSteal = styled.div`
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
  top: 310px;
  z-index: 2;
`;

export default function TextStealing() {
  return (
    <div>
      <TextSteal>Resort to stealing....</TextSteal>
      <TextSteal>Let's see what.....</TextSteal>
    </div>
  );
}
