import styled from "styled-components";
import { useRouter } from "next/router";

const Start = styled.button`
  width: 200px;
  height: 70px;
  background-color: #71f099;
  color: #fefae0;
  font-size: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 600px;
`;

export default function StartButton({ path = "" }) {
  const r = useRouter();
  return (
    <Start onClick={() => r.replace({ pathname: path })}> Back </Start>
  );
}

