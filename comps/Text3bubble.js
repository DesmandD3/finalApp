import styled from "styled-components";

const Textbub3 = styled.div`
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
  top: 360px;
  z-index:2;

`;

export default function Text3bubble() {
  return (
    <div>
      <Textbub3>I got kicked out of the house when I was 18, Now I am just on the streets, begging for some money, to 
        survive. 
      </Textbub3>
      <Textbub3>Click on the <b>"Next"</b> button
      </Textbub3>
    </div>
  );
}