import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem 0;
  background-color: pink;
`

export const Footer = () => {
  return (
    <StyledFooter>
      <p>Coded with ❤️ by: Andrea, Anna, Corey and M.K.</p>
    </StyledFooter>
  )
}
