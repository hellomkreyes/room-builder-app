import { CategoriesDropdown } from '../components/atoms'
import { RoomViewer } from '../components/organisms'
import { Toolbar } from '../components/molecules'
import styled from 'styled-components'
import { Accordion } from '../components/molecules'

const StyledRoomBuilder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RoomBuilder = () => {
  return (
    <StyledRoomBuilder>
      <Accordion heading={'Choose your room'}>
        <div>Rooms</div>
      </Accordion>
      <Accordion heading={'Choose your furniture'}>
        <div>Furniture</div>
      </Accordion>
      <Accordion heading={'Choose your decor'}>
        <div>Decor</div>
      </Accordion>
      <RoomViewer />
      <Toolbar />
      <CategoriesDropdown type='furniture'>
        <option value='one'>Seating</option>
        <option value='two'>Lighting</option>
        <option value='three'>Tables</option>
        <option value='three'>Rugs</option>
      </CategoriesDropdown>
    </StyledRoomBuilder>
  )
}
