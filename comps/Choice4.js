import { useRouter } from "next/router";
import styled from "styled-components";

const ChoiceButton4 = styled.button`
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
  top: 680px;
  z-index: 3;
`;

// const CheatGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: repeat(3, 1fr);
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
// `;

export default function Choice4() {
  const r = useRouter();
  return (
    // <CheatGrid>
    (<ChoiceButton4> Drugs/Narcotics </ChoiceButton4>),
    (<ChoiceButton4> Alcohol</ChoiceButton4>),
    (
      <ChoiceButton4 onClick={() => r.replace({ pathname: "/results_a_high" })}>
        Danger: High - Using drugs as an escape daily, not accessing programs
        that can help, and committing crime frequently.
      </ChoiceButton4>
    )
    // </CheatGrid>
  );
}
