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

  ${ ( { isNarrow } ) => isNarrow && `
    height: 1.5rem;
  ` }

  ${ ( { isOutline } ) => isOutline && `
    background-color: transparent;
    color: #888;
    border: 1px solid;
  ` }
`;

export default Button;
