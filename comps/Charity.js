import styled from "styled-components";
import { useRouter } from "next/router";
const CharityButton = styled.button`
  background-color: #f5fcc9;
  width: 100px;
  height: 90px;
  font-size: 18px;
  border-radius: 10px;
`;

export default function Charity() {
  const r = useRouter();
  return (
    <CharityButton
      onClick={() =>
        r.replace({
          pathname: "https://www.covenanthousebc.org",
        })
      }
    >
      Covenant House
    </CharityButton>
  );
}
