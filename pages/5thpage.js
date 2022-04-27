import Leafs from "../comps/leafs";
import styled from "styled-components";
import Moon from "../comps/Moon";
import Man3 from "../comps/man3";
import SmallNextbutton from "../comps/smNext";
import SmallBackbutton from "../comps/smBack";
import Navbar from "../comps/nav/navbar";
import Choice3 from "../comps/Choice3";
import Whatlevel from "../comps/Whatlevel";

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
        <Whatlevel/>
        <Man3 />
        <Choice3 />
        <SmallBackbutton path="/4thpage" />
        <SmallNextbutton path="/results" />
      </FullPage>
    </div>
  );
}