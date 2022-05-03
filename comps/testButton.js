import styled from "styled-components";
import { num, ChangeNum } from "../data/globalData";

const TButton = styled.button`
  background-color: #41658a;
  color: #fefae0;
  height: 65px;
  width: 350px;
  border-radius: 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 500px;
`;

export default function TestButton() {
  return (
    <TButton
      onClick={() => {
        ChangeNum();
      }}
    >
      Testing Button
    </TButton>
  );
}
