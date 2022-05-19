import styled from "styled-components";

const Textbub4 = styled.div`
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
  top: 330px;
  z-index: 2;
`;

export default function Text4bubble() {
  return (
    <div>
      <Textbub4>
        Drugs are abundant on the streets and readily available—an easy escape
        for someone like me.
        <br />
        But narcotics laced with fentanyl make it a deadly gamble and easy to
        die from an overdose.
      </Textbub4>
      <Textbub4>Let's see what I do to get by.</Textbub4>
    </div>
  );
}
