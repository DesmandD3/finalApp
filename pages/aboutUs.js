import styled from "styled-components";
import Back from "../comps/Back";

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

const Names = styled.p`
  font-size: 18px;
  color: #fefae0;
`;

export default function About() {
  return (
    <FullPage>
      <PageTitle>About Us</PageTitle>
      <Header> Pathfinders </Header>
      <PageTitle> Imagine the Story </PageTitle>
      <Names>
        Aly Ali <br></br>
        Desmand King <br></br>
        Tyler Lee <br></br>
        Justin Ma <br></br>
        John Sustituido <br></br>
      </Names>
      <Names>
        MDIA - 2106<br></br>
        Set - A
      </Names>
      <Back></Back>
    </FullPage>
  );
}
