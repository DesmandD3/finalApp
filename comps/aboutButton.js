import styled from "styled-components";
import { useRouter } from "next/router";

const About = styled.button`
  width: 200px;
  height: 70px;
  background-color: #71f099;
  color: #fefae0;
  font-size: 40px;
  border-radius: 10px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top 700px;
  z-index: 3;
  :hover{
    background-color: red;
    opacity: 100%;
  }
`;

export default function AboutButton() {
  const r = useRouter();
  return (
    <About
      onClick={() =>
        r.replace({
          pathname: "/aboutUs",
        })
      }
    >
      About
    </About>
  );
}
