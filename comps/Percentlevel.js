import styled from "styled-components";
const Stresslevel = styled.div`
position: relative;
width: auto;
height: 34px;
left: 40%;

font-family: 'Fira Sans';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 19px;
z-index:2;
color: #fff;
`
export default function LevelText(){
    return (
        <Stresslevel>Low</Stresslevel>
    )
}