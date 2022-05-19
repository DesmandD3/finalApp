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
  z-index: 2;
`;

export default function TextBegging() {
  return (
    <div>
      <TextBeg>Begging for food and money....</TextBeg>
      <TextBeg>Let's see what my level of danger is.</TextBeg>
    </div>
  );
}
