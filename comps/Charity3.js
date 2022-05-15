import styled from "styled-components";
import { useRouter } from "next/router";
const CharityButton3 = styled.button`
  background-color: #f5fcc9;
  width: 100px;
  height: 90px;
  font-size: 18px;
  border-radius: 10px;
`;

export default function Charity3() {
  const r = useRouter();
  return (
    <CharityButton3
      onClick={() =>
        r.replace({
          pathname: "https://www.directionsyouthservices.ca/donate",
        })
      }
    >
      Directions Youth Services
    </CharityButton3>
  );
}
