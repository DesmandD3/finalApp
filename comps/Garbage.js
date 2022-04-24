import React from 'react';
import styled from 'styled-components';



function Garbage(){
    return (

        <div>
            <img style={{
                display: 'flex',
                position: 'absolute',
                top: 500,
                width:180,
                zIndex:1,
                objectFit:'contain',
                }} src='/Garbage.svg' />
            
        </div>
    )
}
export default Garbage;