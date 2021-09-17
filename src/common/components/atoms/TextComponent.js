import React from 'react';
import styled from 'styled-components';

const StyledTextComponent = styled.div`
	background-color: peachpuff;

`

export const TextComponent = () => {
	return(
		<StyledTextComponent>
			<p>This is an intro copy block!</p>
		</StyledTextComponent>
	);
}