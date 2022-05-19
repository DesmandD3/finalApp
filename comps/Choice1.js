import { useRouter } from "next/router";
import styled from "styled-components";

const ChoiceButton1 = styled.button`
  background-color: #41658a;
  color: #fefae0;
  height: 165px;
  width: 350px;
  border-radius: 10px;
  font-size: 35px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 580px;
  z-index: 3;
`;

export default function Choice1() {
  const r = useRouter();
  return (
    (<ChoiceButton1> Alcohol</ChoiceButton1>),
    (
      <ChoiceButton1 onClick={() => r.replace({ pathname: "/Forthpage" })}>
        Kicked Out of the House
      </ChoiceButton1>
    )
  );
}
