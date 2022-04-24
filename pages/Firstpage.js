import Leafs from "../comps/leafs";
import styled from "styled-components";
import Moon from "../comps/Moon";
import Man from "../comps/man";
import House from "../comps/House";

const FullPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&display=swap");
  background:linear-gradient(to bottom, #003472 0%, #003472 70%, #758998 70%, #758998 100%) ;
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
        <Moon />
        <House/>
        <Man/>
      </FullPage>
    </div>
  );
}
