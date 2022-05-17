import Leafs from "../comps/leafs";
import styled from "styled-components";
import Moon from "../comps/Moon";
import Man from "../comps/man";
import SmallNextbutton from "../comps/smNext";
import SmallBackbutton from "../comps/smBack";
import Navbar from "../comps/nav/navbar";
import Lamp from "../comps/Lamp";
import Text2Bubble2 from "../comps/Text2_2bubble";

const FullPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&display=swap");
  background: linear-gradient(
    to bottom,
    #7d98a1 0%,
    #7d98a1 7.5%,
    #003472 8%,
    #003472 65%,
    #758998 65%,
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
        <Moon />
        <Man />
        <Lamp/>
        <Text2Bubble2 />
        <SmallBackbutton path="/2ndpage" />
        <SmallNextbutton path="/3rdpage" />
      </FullPage>
    </div>
  );
}
