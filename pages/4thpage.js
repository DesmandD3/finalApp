import Leafs from "../comps/leafs";
import styled from "styled-components";
import Tent from "../comps/tent";
import SmallBackbutton from "../comps/smBack";
import Navbar from "../comps/nav/navbar";
import Choice from "../comps/ChoiceButton";
import Choice2 from "../comps/ChoiceButton2";
import Choice3 from "../comps/ChoiceButton3";
import Man3 from "../comps/man3";
import Whattrouble from "../comps/Whattrouble";
import Moon2 from "../comps/Moon2";
import { num } from "../data/globalData";

const FullPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&display=swap");
  background: linear-gradient(
    to bottom,
    #7d98a1 0%,
    #7d98a1 7.5%,
    #003472 8%,
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
        <Moon2 />
        <Tent />
        <Whattrouble />
        <Man3 />
        <Choice />
        <Choice2 />
        <Choice3 />
        <SmallBackbutton path="/Forthpage" />
      </FullPage>
    </div>
  );
}
