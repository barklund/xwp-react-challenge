/**
 * External dependencies
 */
import styled from 'styled-components';

const Button = styled.button.attrs( { type: 'submit' } )`
  border: 0;
  font-size: 0.9rem;
  line-height: 1rem;
  color: white;
  height: 2rem;
  padding: 0 1rem;
  min-width: 6rem;
  border-radius: .5rem;
  text-align: center;
  background-color: #1A73E8;
	cursor: pointer;

  ${ ( { isNarrow } ) => isNarrow && `
    height: 1.5rem;
  ` }

  ${ ( { isSecondary, isGray } ) => isSecondary && `
    background-color: transparent;
    color: ${ isGray ? '#888' : '#1A73E8' };
    border: 1px solid;
  ` }
`;

export default Button;
