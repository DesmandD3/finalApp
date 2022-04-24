import StartButton from "../comps/start-button";
import Leafs from "../comps/leafs";
import styled from "styled-components";
import Moon from "../comps/Moon";
import Lamp from "../comps/Lamp";

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

const Header = styled.h1`
  font-size: 48px;
  margin-top: 180px;
  color: fefae0;
  color: #fefae0;
`;

const PageTitle = styled.h2`
  font-size: 24px;
  color: #fefae0;
  margin-bottom: 120px;
`;


export default function Start() {
  return (
    <div>
      <Leafs />
      <FullPage>
      <Lamp />
        <Moon />
        <Header>Pathfinders</Header>
        <PageTitle>Imagine the Story</PageTitle>
        <StartButton></StartButton>
      </FullPage>
    </div>
  );
}
