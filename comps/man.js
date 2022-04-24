import React from 'react';
import styled from 'styled-components';



function Man(){
    return (

        <div>
            <img style={{
                display: 'flex',
                position: 'absolute',
                top: 150,
                right: 10,
                objectFit:'contain',
                zIndex: 1,
                }} src='/Man.svg' />
            
        </div>
    )
}
export default Man;