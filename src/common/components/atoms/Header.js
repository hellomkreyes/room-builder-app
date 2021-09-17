import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: pink;
    height: 50px;
`

const Header = () => {
    return (
        <StyledHeader>
            <h1>Happy Room Designer (Endy Edition)</h1>
        </StyledHeader>
    )
}

export default Header;