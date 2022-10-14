import { Button, TextComponent } from '../components/atoms'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledContentContainer = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LandingPage = () => {
  return (
    <StyledContentContainer>
      <TextComponent />
      <Link to='room-builder'>
        <Button label='Start Designing' />
      </Link>
    </StyledContentContainer>
  )
}
