import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    background-color: pink;
    height: 50px;
`

export const Header = () => {
    return (
        <StyledHeader>
            <h1>Happy Room Designer (Endy Edition)</h1>
        </StyledHeader>
    )
}