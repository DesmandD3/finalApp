import styled from "styled-components";

const HelpLinks = styled.button `
background-color: #F5FCC9;
font-size: 18px;
color: #41658A;
width: 135px;
height: 60px;
border-radius: 10px;
border-color: #71F099;



`;


const LinkGrid = styled.div `
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows:1fr;
grid-column-gap:0 px;
grid-row-gap:0 px;
justify-items: center;
align-items: center;
`;


export default function Links(){




return <div> 
    <LinkGrid> 
        <HelpLinks> Covenant House </HelpLinks>
        <HelpLinks> Food Bank </HelpLinks>
        <HelpLinks>  Job Listings </HelpLinks>
    </LinkGrid>
</div>
}