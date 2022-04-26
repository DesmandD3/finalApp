import { useRouter } from "next/router";
import styled from "styled-components";

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
  top: 580px;
  
`;

// const CheatGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: repeat(3, 1fr);
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
// `;

export default function Choice3() {
  const r = useRouter();
  return (
    // <CheatGrid>
    (<ChoiceButton3> Drugs/Narcotics </ChoiceButton3>),
    (<ChoiceButton3> Alcohol</ChoiceButton3>),
    (
      <ChoiceButton3 onClick={() => r.replace({ pathname: "/results" })}>
        Low - Several shelter and aid options
      </ChoiceButton3>
    )
    // </CheatGrid>
  );
}
