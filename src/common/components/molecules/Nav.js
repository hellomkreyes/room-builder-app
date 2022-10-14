import React from 'react'
import { Button, Anchor } from '../atoms'
import endyLogo from '../../../assets/endy-logo.svg'
import styled from 'styled-components'

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: pink;
  height: auto;
  padding-right: 2rem;
`

export const Nav = () => {
  return (
    <StyledNav>
      <Anchor href='https://endy.com' img={endyLogo} />
      <h1>Happy Room Designer (Endy Edition)</h1>
      <Button label='Instructions' plain />
    </StyledNav>
  )
}
