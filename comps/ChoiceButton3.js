import { useRouter } from "next/router";
import styled from "styled-components";

const Choice3Button = styled.button`
  background-color: #41658a;
  color: #fefae0;
  height: 65px;
  width: 350px;
  border-radius: 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 655px;
  z-index: 3;
`;

export default function Choice3() {
  const r = useRouter();
  return (
    <Choice3Button onClick={() => r.replace({ pathname: "/5thpage" })}>
      Crime
    </Choice3Button>
  );
}
