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
  top: 330px;
  z-index: 2;
`;

export default function Text3bubble() {
  return (
    <div>
      <Textbub3>
        I just turned 18 and now I'm just on the streets.
        <br /> Alone and begging for money.
        <br /> Just trying to live, trying to survive.
      </Textbub3>
      <Textbub3>
        Find out what <b>troubles</b> I could fall into.
      </Textbub3>
    </div>
  );
}
