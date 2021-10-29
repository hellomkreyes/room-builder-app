import { CategoriesDropdown } from '../components/atoms'
import { RoomViewer } from "../components/organisms"
import { Toolbar } from "../components/molecules"
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
            <CategoriesDropdown type="furniture">
                <option value="one">Seating</option>
                <option value="two">Lighting</option>
                <option value="three">Tables</option>
                <option value="three">Rugs</option>
            </CategoriesDropdown>
        </StyledRoomBuilder>
    )
}