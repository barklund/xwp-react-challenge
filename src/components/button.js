import styled from 'styled-components';

const Button = styled.button.attrs({type:'submit'})`
  border: 0;
  color: white;
  height: 2em;
  padding: 0 2em;
  min-width: 6em;
  text-align: center;
  background-color: purple;

  ${({isOutline}) => isOutline && `
    background-color: transparent;
    color: purple;
    border: 1px solid;
  `}
`;

export default Button;
