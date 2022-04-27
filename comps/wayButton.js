import styled from "styled-components";
import { useRouter } from "next/router";
const WayButton = styled.button`
  background-color: #41658a;
  color: #fefae0;
  border-radius: 10px;
  width: 180px;
  height: 60px;
  font-size: 24px;
  border-color: #71f099;
  margin: 5px;
  border-width: 2px;
  position: relative;
  left: 55px;
`;

export default function WButton() {
  const r = useRouter();
  return( 
  
  <WayButton onClick={() => r.replace({ pathname: "/waystohelp" })}>Ways To Help</WayButton>


  );

}
