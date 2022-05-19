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
        But, there is hope. There are considerate organizations that will help
        me get my life back together. In my situation, just a little bit of
        assistance can go miles to help get me off of the streets. There is a
        chance that I can live a safe, healthy and everyday life one day.
      </Textbub6>
    </div>
  );
}
