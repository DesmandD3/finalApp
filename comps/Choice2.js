import { useRouter } from "next/router";
import styled from "styled-components";
import { GetNum, ChangeNum } from "../data/globalData";

const ChoiceButton2 = styled.button`
  background-color: #41658a;
  color: #fefae0;
  height: 65px;
  width: 350px;
  border-radius: 10px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 590px;
  z-index: 3;
`;

export default function Choice2() {
  const r = useRouter();
  var theNum = GetNum();
  return (
    (<ChoiceButton2> Drugs/Narcotics </ChoiceButton2>),
    (<ChoiceButton2> Alcohol</ChoiceButton2>),
    (
      <ChoiceButton2
        onClick={() => {
          ChangeNum(theNum);
          r.replace({ pathname: "/results_a_mid" });
        }}
      >
        Danger: Medium - Involved in petty crime/stealing
      </ChoiceButton2>
    )
  );
}
