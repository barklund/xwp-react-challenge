import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  width: 12em;
  padding: 1em;
  margin: 0 1em 1em 0;
  background: #555;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

const Image = styled.img`
  object-fit: contain;
  width: 10em;
  height: 10em;
`;

const Title = styled.p`
  text-align: center;
  background: white;
  margin: 0;
  padding: .5em 0;
  font-size: 1rem;
`;

function MediaItem({image,title}) {
  return (
    <Item>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
    </Item>
  )
}

export default MediaItem;
