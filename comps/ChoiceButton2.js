import { useRouter } from "next/router";
import styled from "styled-components";

const Choice2Button = styled.button`
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
  top: 575px;
`;

export default function Choice2() {
  const r = useRouter();
  return (
    // (<ChoiceButton> Drugs/Narcotics </ChoiceButton>),
    // (<ChoiceButton> Alcohol</ChoiceButton>),
    <Choice2Button onClick={() => r.replace({ pathname: "/5thpage" })}>
      Alcohol
    </Choice2Button>
  );
}