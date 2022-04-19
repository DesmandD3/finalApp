import styled from "styled-components";
import { useRouter } from "next/router";
const SmallNext = styled.button`
  background-color: #41658a;
  color: #fefae0;
  height: 50px;
  width: 120px;
  border-radius: 10px;
  font-size: 25px;
`;

export default function SmallNextbutton() {
  const r = useRouter();
  return (
    <SmallNext onClick={() => r.replace({ pathname: "/waystohelp" })}>
      Next
    </SmallNext>
  );
}
