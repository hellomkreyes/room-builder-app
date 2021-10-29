
import styled from "styled-components"

const StyledRoomViewer = styled.div`
    border: 2px solid black;
    width: 500px;
    height: 500px;
`

export const RoomViewer = () => {
    return (
        <StyledRoomViewer>I am the canvas component</StyledRoomViewer>
    )
}