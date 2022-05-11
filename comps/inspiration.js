import styled from "styled-components";
import { useRouter } from "next/router";

const InspriationButton = styled.button`
  background-color: #f5fcc9;
  width: 100px;
  height: 90px;
  font-size: 18px;
  border-radius: 10px;
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
      Our Inspiration
    </InspriationButton>
  );
}
