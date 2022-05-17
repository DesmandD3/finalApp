import Leafs from "../comps/leafs";
import styled from "styled-components";
import SmallBackbutton from "../comps/smBack";
import Navbar from "../comps/nav/navbar";
import Man4 from "../comps/man4";
import Text6bubble from "../comps/Text6bubble";
import Charity from "../comps/Charity";
import Charity2  from "../comps/Charity2";
import Charity3 from "../comps/Charity3";
import { num } from "../data/globalData";


const FullPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&display=swap");
  background: linear-gradient(
    to bottom,
    #7d98a1 0%,
    #7d98a1 7.5%,
    #00a4e4 8%,
    #00a4e4 60%,
    #758998 60%,
    #758998 100%
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
        <Man4/>
        <Text6bubble/>
        <Charity/>
        <Charity2/>
        <Charity3/>
        <SmallBackbutton path="/waystohelp" />
      </FullPage>
    </div>
  );
}