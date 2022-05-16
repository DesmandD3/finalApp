import styled from "styled-components";
import { useRouter } from "next/router";
import { withTheme } from "styled-components";

const Start = styled.button`
  width: 200px;
  height: 70px;
  background-color: darkred;
  color: #fefae0;
  font-size: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 760px;
  z-index: 3;
  :hover {
    background-color: lightgreen;
    opacity: 100%;
    transition: 0.1s;
  }
`;

export default function StartButton({ path = "" }) {
  const r = useRouter();
  return <Start onClick={() => r.replace({ pathname: path })}> Back </Start>;
}
