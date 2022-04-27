import Leafs from "../comps/leafs";
import styled from "styled-components";
import Moon from "../comps/Moon";
import Man from "../comps/man";
import Tent from "../comps/tent";
import SmallNextbutton from "../comps/smNext";
import SmallBackbutton from "../comps/smBack";
import Navbar from "../comps/nav/navbar";
import Choice from "../comps/ChoiceButton";
import Choice2 from "../comps/ChoiceButton2";
import Choice3 from "../comps/ChoiceButton3";
import Man3 from "../comps/man3";

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
        <Man3 />
          <Choice />
          <Choice2/>
          <Choice3/>
        <SmallBackbutton path="/3rdpage" />
        <SmallNextbutton path="/5thpage" />
        
      </FullPage>
    </div>
  );
}
