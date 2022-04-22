import StartButton from "../comps/start-button";
import Leafs from "../comps/leafs";
import styled from "styled-components";

const FullPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&display=swap");
  background-color: #222e50;
  text-align: center;
  font-family: "Fira Sans", sans-serif;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
`;

const Header = styled.h1`
  font-size: 48px;
  color: fefae0;
  color: #fefae0;
`;

const PageTitle = styled.h2`
  font-size: 24px;
  color: #fefae0;
`;

export default function Start() {
  return (
    <div>
      <Leafs />
      <FullPage>
        <Header>Pathfinders</Header>
        <PageTitle>Imagine the Story</PageTitle>
        <StartButton></StartButton>
        <TutorialButton> </TutorialButton>
      </FullPage>
    </div>
  );
}
