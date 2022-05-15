import styled from "styled-components";

const WaysTextBub = styled.div`
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
  top: 380px;
`;

export default function WaysTextBubble() {
  return (
    <div>
      <WaysTextBub>
        Thankfully our Kevin is fiction.
        <br />
        But there are many homeless and at risk youth that need your help.
        <br />
        If you are able to donate please contact these local outreach programs
        below.
        <br /> Thank you.
      </WaysTextBub>
    </div>
  );
}
