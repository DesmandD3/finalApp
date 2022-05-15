import styled from "styled-components";
import { useRouter } from "next/router";
const CharityButton2 = styled.button`
  background-color: #f5fcc9;
  width: 100px;
  height: 90px;
  font-size: 18px;
  border-radius: 10px;
`;

export default function Charity2() {
  const r = useRouter();
  return (
    <CharityButton2
      onClick={() =>
        r.replace({
          pathname: "https://foodbank.bc.ca/ways-to-give/",
        })
      }
    >
      Food Bank
    </CharityButton2>
  );
}
