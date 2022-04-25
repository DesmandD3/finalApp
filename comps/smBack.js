import styled from "styled-components";

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
`;

export default function SmallBackbutton() {
  return <SmallBack>Back</SmallBack>;
}
