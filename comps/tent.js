import React from 'react';
import styled from 'styled-components';



function Tent(){
    return (

        <div>
            <img style={{
                display: 'flex',
                position: 'relative',
                bottom: 320,
                left:30,
                width:800,
                objectFit: 'contain',
                }} src='/tent.svg' />
            
        </div>
    )
}
export default Tent;