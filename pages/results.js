import Leafs from "../comps/leafs";
import styled from "styled-components";
import Moon from "../comps/Moon";
import Man2 from "../comps/man2";
import Navbar from "../comps/nav/navbar";
import TextResult from "../comps/textresult1";
import WButton from "../comps/wayButton";
import PersentageComp from "../comps/Percentage";
const FullPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&display=swap");
  background: linear-gradient(
    to bottom,
    #003472 0%,
    #003472 50%,
    #38764b 50%,
    #38764b 100%
  );
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  max-width: auto;
  height: 844px;
  overflow: hidden;
`;

export default function Start() {
  return (
    <div>
      <Leafs />
      <FullPage>
      <Navbar />
        <Moon />
        <Man2 />
        <TextResult/>
        <PersentageComp />
        <WButton />
      </FullPage>
    </div>
  );
}
