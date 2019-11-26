import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 10em;
`;

const Label = styled.span`
  width: 6em;
`;

const Group = styled.div`
  display: flex;
  margin: .5em 0;
`;

function Preview({data}) {
  return (
    <Group>
      <Label>Preview:</Label>
      <Image src={data} alt="sample" />
    </Group>
  );
}

export default Preview;