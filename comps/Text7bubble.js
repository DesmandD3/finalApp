import styled from "styled-components";

const Textbub7 = styled.div`
  width: auto;
  height: auto;
  background-color: #41658a;
  color: #fefae0;
  font-size: 22px;
  margin: 8px;
  padding: 8px;
  border-radius: 10px;
  position: absolute;
  left: 1px;
  top: 550px;
  z-index: 2;
`;

export default function Text7bubble() {
  return (
    <Textbub7>
      Please visit any of these charities through the links below and find out
      how you can help. Thank you.
    </Textbub7>
  );
}
