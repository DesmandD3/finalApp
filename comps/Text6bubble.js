import styled from "styled-components";

const Textbub6 = styled.div`
  width: auto;
  height: auto;
  background-color: #41658a;
  color: #fefae0;
  font-size: 22px;
  margin: 8px;
  padding: 8px;
  border-radius: 10px;
  position: absolute;
  left: 1px;
  top: 550px;
  z-index: 2;
`;

export default function Text6bubble() {
  return (
    <div>
      <Textbub6>
       Hello My Name is Steven, I am here to help you with getting your life back together. 
      </Textbub6>
    </div>
  );
}