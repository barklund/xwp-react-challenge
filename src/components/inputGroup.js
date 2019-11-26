import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  color: purple;
  width: 16em;
  border: 1px solid;
`;

const Label = styled.span`
  width: 6em;
`;

const Group = styled.label`
  display: flex;
  margin: .5em 0;
`;

function InputGroup({label, ...rest}) {
  return (
    <Group>
      <Label>{label}</Label>
      <Input {...rest} />
    </Group>
  );
}

export default InputGroup;
