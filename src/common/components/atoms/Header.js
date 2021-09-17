import React from 'react';
import { Button } from '../atoms'
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: pink;
    height: 50px;
    padding: 0 2rem;
`

export const Header = () => {
    return (
        <StyledHeader>
            <h1>Happy Room Designer (Endy Edition)</h1>
            <Button label="Instructions" />
        </StyledHeader>
    )
}