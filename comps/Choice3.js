import { useRouter } from "next/router";
import styled from "styled-components";
import { GetNum, ChangeNum } from "../data/globalData";

const ChoiceButton3 = styled.button`
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
  top: 510px;
  z-index: 3;
`;

export default function Choice3() {
  const r = useRouter();
  var theNum = GetNum();
  return (
    (<ChoiceButton3> Drugs/Narcotics </ChoiceButton3>),
    (<ChoiceButton3> Alcohol</ChoiceButton3>),
    (
      <ChoiceButton3
        onClick={() => {
          ChangeNum(theNum);
          r.replace({ pathname: "/results_a_low" });
        }}
      >
        Danger: Relatively Low - Out of crimes, accessing supports.
      </ChoiceButton3>
    )
  );
}
