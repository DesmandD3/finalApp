import styled from "styled-components";
import { useRouter } from "next/router";

const SmallBack = styled.button`
  background-color: #41658a;
  color: #fefae0;
  height: 50px;
  width: 120px;
  border-radius: 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 260px;
  top: 770px;
  z-index: 3;
`;

export default function SmallBackbutton({ path = "" }) {
  const r = useRouter();
  return (
    <SmallBack onClick={() => r.replace({ pathname: path })}>Back</SmallBack>
  );
}
