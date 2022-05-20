import styled from "styled-components";

const TextbubResHigh = styled.div`
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
  z-index: 3;
`;

export default function TextResHigh() {
  return (
    <div>
      <TextbubResHigh>
        This level shows that Kevin is living his life on the edge. Sadly he is
        prone to using drugs to cope and performing criminal acts regularly. If
        he continues down this path, it will likely lead him to violence, jail
        and even death.
      </TextbubResHigh>
    </div>
  );
}
