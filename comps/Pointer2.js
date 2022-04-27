import styled from "styled-components";
const Pointer = styled.div`
position: relative;
width: 0; 
height: 0; 
border-left: 20px solid transparent;
border-right: 20px solid transparent;
border-top: 20px solid #41658A;
`
export default function PointerComp(){
    return (
        <Pointer />
    )
}