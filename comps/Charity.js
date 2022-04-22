import styled from "styled-components";
import { useRouter } from "next/router";
const CharityButton = styled.button `
background-color: #71F099;
width: 300px;
height: 90px;
border-radius: 10px;
`;

export default function Charity () {
const r = useRouter();
return (

<CharityButton
    onClick={() =>
    r.replace({
        pathname: "https://www.covenanthousebc.org" ,
    })
    }

> </CharityButton>

);



}