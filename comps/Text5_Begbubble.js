import styled from "styled-components";

const TextBeg = styled.div`
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
  z-index: 3;
`;

export default function TextBegging() {
  return (
    <div>
      <TextBeg>
        Begging for food and money is a long and degrading task. Sometimes I'll
        sit on the sidewalk and just stare into the ground. Once and a while,
        someone kind will give me some coins. It could be hours until the next
        kind person walks by.
      </TextBeg>
      <TextBeg>Let's see what my level of danger is.</TextBeg>
    </div>
  );
}
