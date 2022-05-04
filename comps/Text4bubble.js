import styled from "styled-components";

const Textbub4 = styled.div`
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
  top: 345px;
  z-index:2;

`;

export default function Text4bubble() {
  return (
    <div>
      <Textbub4>I got kicked out of the house when I was 18,
        <br/> Now I am just on the streets,
       <br/> begging for some money, to survive. 
      </Textbub4>
      <Textbub4>Let's see what is the <b>Level</b> of stress.
      </Textbub4>
    </div>
  );
}