import React from 'react';
import styled from 'styled-components';



function Logo(){
    return (

        <div>
            <img style={{
                display: 'flex',
                position: 'relative',
                objectFit: 'contain',
                }} src='/logo.svg' />
            
        </div>
    )
}
export default Logo;