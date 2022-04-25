import styled from "styled-components";

const ChoiceButton = styled.button`
  background-color: #41658a;
  color: #fefae0;
  height: 78px;
  width: 535px;
  border-radius: 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 520px;
  text-align: centered;
`;

export default function Choice() {
  return <ChoiceButton> Financial Troubles </ChoiceButton>;
}
