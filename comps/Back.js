import styled from "styled-components";

const Back = styled.button`
  width: 200px;
  height: 70px;
  background-color: #71f099;
  color: #fefae0;
  font-size: 40px;
  border-radius: 10px;
`;

export default function BackButton() {
  return <Back>Back</Back>;
}
