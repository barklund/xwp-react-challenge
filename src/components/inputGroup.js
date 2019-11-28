/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.span`
  width: 6rem;
  font-size: 0.9rem;
`;

const Group = styled.label`
  display: flex;
  margin: 0 0 1rem;
  align-items: center;
`;

export const Input = styled.input`
	color: black;
	flex: 1 1 10rem;
	border: 0;
	background-color: #f2f2f2;
	padding: 0 0.5rem;
	font-size: .9rem;
	line-height: 1.5rem;
	border-radius: .5rem;

	&:focus, &:active {
		outline: none;
		background: #e5e5e5;
	}
`;

function InputGroup( { label, children } ) {
	return (
		<Group>
			<Label>
				{ label }
			</Label>
			{ children }
		</Group>
	);
}

export default InputGroup;

InputGroup.propTypes = {
	label: PropTypes.string.isRequired,
	children: PropTypes.oneOfType( [
		PropTypes.arrayOf( PropTypes.node ),
		PropTypes.node,
	] ).isRequired,
};
