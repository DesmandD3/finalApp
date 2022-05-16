import styled from "styled-components";
import { useRouter } from "next/router";

const InspriationButton = styled.button`
  background-color: #f5fcc9;
  width: 200px;
  height: 90px;
  font-size: 18px;
  border-radius: 10px;
  position: relative;
  top: 20px;
  border-radius: 10px;
  z-index: 3;
  :hover {
    background-color: #71f099;
    opacity: 100%;
  }
`;

export default function Inspriation() {
  const r = useRouter();
  return (
    <InspriationButton
      onClick={() =>
        r.replace({
          pathname: "https://youtu.be/276RZVt-SDk",
        })
      }
    >
      <b>Our Inspiration</b>
      <br />
      (Click to see Video)
    </InspriationButton>
  );
}
