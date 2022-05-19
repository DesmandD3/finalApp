import { useRouter } from "next/router";
import styled from "styled-components";
import { ChangeNum, GetNum } from "../data/globalData";

const ChoiceSoup = styled.button`
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
  z-index: 3;
`;

export default function ChoiceSoupKitchen() {
  const r = useRouter();
  const num = GetNum();
  return (
    // (<ChoiceButton> Drugs/Narcotics </ChoiceButton>),
    // (<ChoiceButton> Alcohol</ChoiceButton>),
    <ChoiceSoup
      onClick={() => {
        ChangeNum(num);
        r.replace({ pathname: "/Soup" });
      }}
    >
      Soup Kitchens
    </ChoiceSoup>
  );
}
