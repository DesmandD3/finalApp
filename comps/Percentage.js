import styled from "styled-components";
import PointerComp from "./Pointer2";
import PercentageNum from "./PercentageNum";
import LevelText from "./Percentlevel";
const Textstress = styled.div`
position: relative;
width: auto;
height: 34px;
left: 37%;

font-family: 'Fira Sans';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 19px;

color: #000;
`
const Pointer1 = styled.div`
position: relative;
width: 0; 
height: 0;
left: 40%; 
border-left: 20px solid transparent;
border-right: 20px solid transparent;
border-top: 20px solid #41658A;
`
const PercentBar = styled.div`
position: relative;
width: 90%;
height: 60px;
background: linear-gradient(269.85deg, #F41212 1.84%, #FBFF20 50.79%, #52FF00 99.73%);
`;


export default function PersentageComp(){
    return (
        <div>
        <Textstress>Stress Meter</Textstress>
        <Pointer1 />
        <LevelText />
        <PercentageNum />
        <PointerComp />
        <PercentBar />
        </div>
      
    )
}


