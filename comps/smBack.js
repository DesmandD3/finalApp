import styled from "styled-components";

const SmallBack = styled.button`
  background-color: #41658a;
  color: #fefae0;
  height: 50px;
  width: 120px;
  border-radius: 10px;
  font-size: 25px;
  z-index: 1;
`;

export default function SmallBackbutton() {
  return <SmallBack>Back</SmallBack>;
}
