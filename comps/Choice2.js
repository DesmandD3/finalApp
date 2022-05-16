import { useRouter } from "next/router";
import styled from "styled-components";

const ChoiceButton2 = styled.button`
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
  top: 595px;
  z-index: 3;
`;

// const CheatGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: repeat(3, 1fr);
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
// `;

export default function Choice2() {
  const r = useRouter();
  return (
    // <CheatGrid>
    (<ChoiceButton2> Drugs/Narcotics </ChoiceButton2>),
    (<ChoiceButton2> Alcohol</ChoiceButton2>),
    (
      <ChoiceButton2 onClick={() => r.replace({ pathname: "/results1" })}>
        Medium - Limited Shelter and aid (Normal State)
      </ChoiceButton2>
    )
    // </CheatGrid>
  );
}
