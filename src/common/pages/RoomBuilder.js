import { CategoriesDropdown } from '../components/atoms'
import { RoomViewer } from '../components/organisms'
import { Toolbar } from '../components/molecules'
import styled from 'styled-components'
import { Accordion } from '../components/molecules'

const StyledRoomBuilder = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
  padding: 0 75px;
`

const StyledChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
`

const StyledBuildContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
`

export const RoomBuilder = () => {
  return (
    <StyledRoomBuilder>
      <StyledChoiceContainer>
        <Accordion heading={'Choose your room'}>
          <div>Rooms</div>
        </Accordion>
        <Accordion heading={'Choose your furniture'}>
          <div>Furniture</div>
        </Accordion>
        <Accordion heading={'Choose your decor'}>
          <div>Decor</div>
        </Accordion>
        <CategoriesDropdown type='furniture'>
          <option value='one'>Seating</option>
          <option value='two'>Lighting</option>
          <option value='three'>Tables</option>
          <option value='three'>Rugs</option>
        </CategoriesDropdown>
      </StyledChoiceContainer>
      <StyledBuildContainer>
        <RoomViewer />
        <Toolbar />
      </StyledBuildContainer>
    </StyledRoomBuilder>
  )
}
