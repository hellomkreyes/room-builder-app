import React from 'react';
import { Button, Anchor} from '../atoms'
import endyLogo from '../../../assets/endy-logo.svg'
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: pink;
    height: auto;
    padding-right: 2rem;
`

export const Header = () => {
    return (
        <StyledHeader>
            <Anchor          
                href="https://endy.com" 
                img={endyLogo}
                classes="width-100" />
            <h1>Happy Room Designer (Endy Edition)</h1>
            <Button label="Instructions" />
        </StyledHeader>
    )
}