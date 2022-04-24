import React from 'react';
import styled from 'styled-components';
import lamp from '../public/light1.svg'


function Lamp(){
    return (

        <div>
            <img style={{
                display: 'flex',
                position: 'absolute',
                top: 40,
                right: 60,
                width: 600,
                height: 750,
                objectFit:'contain',

                }} src='/light1.svg' />
            
        </div>
    )
}
export default Lamp;