import styled from "styled-components";
const PercentageNumber = styled.div`
position: relative;
width: 178px;
height: 154px;
left: 36%;
z-index:2;
font-family: 'Fira Sans';
font-style: normal;
font-weight: 400;
font-size: 128px;
line-height: 154px;
text-align: center;
color: #4CD136;
`

export default function PercentageNum(){
    return (
        <PercentageNumber>0%</PercentageNumber>
    )
}