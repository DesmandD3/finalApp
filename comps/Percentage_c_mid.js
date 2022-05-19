import styled from "styled-components";

const DivCont = styled.div`
  position: absolute;
  top: 19%;
  left: 28%;
  z-index: 2;

`;

const Stresslevel = styled.div`
position: relative;
width: auto;
height: 34px;
left: 40%;
top: 20px;

font-family: 'Fira Sans';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 19px;
z-index:2;
color: #fff;
`;

const Textstress = styled.div`
  position: relative;
  width: auto;
  height: 34px;
  left: 37%;

  font-family: "Fira Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;

  color: #fff;
`;
const Pointer1 = styled.div`
  position: relative;
  width: 0;
  height: 0;
  left: 75%;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #41658a;
`;

const PercentBar = styled.div`
  position: relative;
  width: 140%;
  height: 60px;
  background: linear-gradient(
    269.85deg,
    #f41212 1.84%,
    #fbff20 50.79%,
    #52ff00 99.73%
  );
`;

const Pointer2 = styled.div`
position: relative;
width: 0; 
height: 0; 
border-left: 20px solid transparent;
border-right: 20px solid transparent;
border-top: 20px solid #41658A;
z-index:2;
left: 0%;
transform: translate(100px);
transition: 2s;
`;

const PercentageNumber = styled.div`
position: relative;
width: 178px;
height: 154px;
left: 36%;
z-index:2;
font-family: 'Fira Sans';
font-style: normal;
font-weight: 400;
font-size: 100px;
line-height: 154px;
text-align: center;
color: #fbf920;
`;


export default function PersentageCompCM() {
  return (
    <DivCont>
      <Textstress>Stress Meter</Textstress>
      <Pointer1 />
      <Stresslevel>Medium</Stresslevel>
      <PercentageNumber>50%</PercentageNumber>
      <Pointer2 />
      <PercentBar />
    </DivCont>
  );
}
