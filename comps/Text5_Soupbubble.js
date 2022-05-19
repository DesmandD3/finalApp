import styled from "styled-components";

const TextSoup = styled.div`
  width: auto;
  height: auto;
  background-color: #41658a;
  color: #fefae0;
  font-size: 22px;
  margin: 8px;
  padding: 8px;
  border-radius: 10px;
  position: relative;
  left: 1px;
  top: 350px;
  z-index: 2;
`;

export default function TextSoupKitchens() {
  return (
    <div>
      <TextSoup>Eating a soup kitchens</TextSoup>
      <TextSoup>Let's see what my level of danger is.</TextSoup>
    </div>
  );
}
