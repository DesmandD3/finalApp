import React from 'react';
import styled from 'styled-components';



function Tent(){
    return (

        <div>
            <img style={{
                display: 'flex',
                position: 'relative',
                top: -320,
                left:30,
                width:900,
                objectFit:'contain',
                }} src='/tent.svg' />
            
        </div>
    )
}
export default Tent;