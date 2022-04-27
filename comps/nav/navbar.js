import Next from 'next'
import React from 'react'
import styled from 'styled-components'
import Burger from './burger'

const Nav = styled.nav`
width:100%;
height:65px;
border-bottom:2px solid #f1f1f1;
padding:0 20px;
display:flex;
justify-content:space-between;

.hamLogo {
    padding:15px 0;
}
`

const Navbar = () => {
    return (
        <Nav>
           <div className="hamLogo">
                       </div>
           <Burger />
           </Nav>
    )
}

export default Navbar;