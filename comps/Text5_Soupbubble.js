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
  top: 215px;
  z-index: 2;
`;

export default function TextSoupKitchens() {
  return (
    <div>
      <TextSoup>
        Although I would like to choose and buy my own food, sometimes I'll have
        to resort to eating at soup kitchens. These charities rely on donations,
        and they are a great resource for someone street youth. Unfortunately,
        because charities rely on donations, they often can't predict when or
        how much food they can provide.
      </TextSoup>
      <TextSoup>Let's see what my level of danger is.</TextSoup>
    </div>
  );
}
