import React from 'react';
import styled from 'styled-components';



function House(){
    return (

        <div>
            <img style={{
                display: 'flex',
                position: 'absolute',
                top: 130,
                left:30,
                width:350,
                objectFit:'contain',
                }} src='/house.svg' />
            
        </div>
    )
}
export default House;