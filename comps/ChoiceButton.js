import { useRouter } from "next/router";
import styled from "styled-components";

const ChoiceButton = styled.button`
  background-color: #41658a;
  color: #fefae0;
  height: 65px;
  width: 350px;
  border-radius: 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 580px;
`;

export default function Choice() {
  const r = useRouter();
  return (
    // (<ChoiceButton> Drugs/Narcotics </ChoiceButton>),
    // (<ChoiceButton> Alcohol</ChoiceButton>),
    <ChoiceButton onClick={() => r.replace({ pathname: "/Fifthpage" })}>
      Crime
    </ChoiceButton>
  );
}
