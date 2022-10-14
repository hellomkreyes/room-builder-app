import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AccordionHeader } from '../atoms'

const StyledAccordionContainer = styled.div`
  display: ${({ isAccordionOpen }) => (isAccordionOpen ? 'block' : 'none')};
`

const StyledAccordion = styled.div`
  width: 100%;
`

export const Accordion = ({ heading, children }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  const toggleItem = (index) => {
    return isAccordionOpen
      ? setIsAccordionOpen(false)
      : setIsAccordionOpen(true)
  }

  return (
    <StyledAccordion>
      <AccordionHeader
        onClick={() => toggleItem()}
        heading={heading}
        isAccordionOpen={isAccordionOpen}
      />
      <StyledAccordionContainer isAccordionOpen={isAccordionOpen}>
        {children}
      </StyledAccordionContainer>
    </StyledAccordion>
  )
}

Accordion.propTypes = {
  heading: PropTypes.string
}
