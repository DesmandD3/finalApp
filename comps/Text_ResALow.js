import styled from "styled-components";

const TextbubResLow = styled.div`
  width: auto;
  height: auto;
  background-color: #41658a;
  color: #fefae0;
  font-size: 22px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  left: 1px;
  top: 330px;
  z-index: 3;
`;

export default function TextResLow() {
  return (
    <div>
      <TextbubResLow>
        This level shows that Kevin is in relatively low danger despite the
        conditions. He is doing his best to try and survive. Begging for money
        and visiting soup kitchens is getting him by, but this is not a
        long-term solution. Kevin could easily slip into a spiral if he starts
        committing crimes or abusing substances.
      </TextbubResLow>
    </div>
  );
}
