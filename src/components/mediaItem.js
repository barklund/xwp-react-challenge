/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function MediaItem( { image, title } ) {
	return (
		<Item>
			<Image src={ image } alt={ title } />
			<Title>
				{ title }
			</Title>
		</Item>
	);
}

MediaItem.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default MediaItem;

const Item = styled.li`
  width: 18em;
  margin: 0 3em 3em 0;
  background: #DADCE0;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

const Image = styled.img`
  object-fit: contain;
  width: 18em;
  height: 18em;
`;

const Title = styled.p`
  text-align: center;
  background: white;
  margin: 0;
  padding: 1em 0;
  font-size: 1rem;
`;
