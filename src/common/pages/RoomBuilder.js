import { RoomViewer, Toolbar } from "../components/organisms"
import styled from "styled-components"

const StyledRoomBuilder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RoomBuilder = () => {
    return (
        <StyledRoomBuilder>
            <RoomViewer />
            <Toolbar />
        </StyledRoomBuilder>
    )
}