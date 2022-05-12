import styled from "styled-components";

const Textbub5 = styled.div`
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

export default function Text5bubble() {
  return (
    <div>
      <Textbub5>I got kicked out of the house when I was 18,
        <br/> Now I am just on the streets drinking alcohol,
       <br/> begging for some money, to survive. 
      </Textbub5>
      <Textbub5>Let's see what is the <b>Level</b> of stress.
      </Textbub5>
    </div>
  );
}