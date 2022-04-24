import styled from "styled-components";
import Back from "../comps/Back";
import Leafs from "../comps/leafs";
import img from "../assets/lampPostShining.png";

const FullPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&display=swap");
  background-color: #222e50;
  text-align: center;
  font-family: "Fira Sans", sans-serif;

  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 844px;
`;

const Header = styled.h1`
  font-size: 48px;
  color: fefae0;
  margin-top: 50px;
  color: #fefae0;
`;

const PageTitle = styled.h2`
  font-size: 24px;
  color: #fefae0;
  margin-top: 70px;
`;

const Names = styled.p`
  font-size: 25px;
  color: #fefae0;
`;

const BackImg = styled.div`
  background-image: url("https://placekitten.com/200/300");
`;

export default function About() {
  return (
    <BackImg>
      <Leafs />
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
    </BackImg>
  );
}
