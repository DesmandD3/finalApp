import { useRouter } from "next/router";
import styled from "styled-components";

const ChoiceButton1 = styled.button`
  background-color: #41658a;
  color: #fefae0;
  height: 78px;
  width: 535px;
  border-radius: 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 520px;
  text-align: centered;
  z-index: 2;
`;

// const CheatGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: repeat(3, 1fr);
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
// `;

export default function Choice1() {
  const r = useRouter();
  return (
    // <CheatGrid>
    (<ChoiceButton1> Alcohol</ChoiceButton1>),
    (
      <ChoiceButton1 onClick={() => r.replace({ pathname: "/Forthpage" })}>
        Financial trouble
      </ChoiceButton1>
    )
    // </CheatGrid>
  );
}
