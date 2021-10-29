import styled from "styled-components"

const StyledToolbar = styled.div`
    border: 2px solid black;
    width: 900px;
    height: 100px;
`

export const Toolbar = () => {
    return (
        <StyledToolbar>Toolbar</StyledToolbar>
    )
}