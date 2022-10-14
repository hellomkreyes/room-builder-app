import PropTypes from 'prop-types'
import { Button } from './Button';
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: transparent;
  color: #222;

  img {
    transform: ${({isAccordionOpen}) => isAccordionOpen ? "rotate(0deg)" : "rotate(45deg)"};
    transition: transform 0.2s ease
  }

`
export const AccordionHeader = ({onClick, heading, isAccordionOpen}) => {
	return (
    <StyledButton onClick={onClick} aria-expanded={isAccordionOpen} isAccordionOpen={isAccordionOpen}>
      <h2>{heading}</h2>
      <img src="https://cdn.sanity.io/images/d0kd7r9c/production/7c498bc282aed9b4c6685490068af6f2cc4c2e56-48x48.svg" alt=""/>
    </StyledButton>
	);
}

AccordionHeader.propTypes = {
  heading: PropTypes.string,
  onClick: PropTypes.func,
  isAccordionOpen: PropTypes.bool
}