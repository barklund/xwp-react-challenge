/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useMedia } from '../media';
import MediaItem from './mediaItem';

function MediaList() {
	const { state: { media } } = useMedia();
	return (
		<List>
			{ media.map( ( { id, title, data } ) => <MediaItem image={ data } title={ title } key={ id } /> ) }
		</List>
	);
}

export default MediaList;

const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 3em -3em 0 0;
  padding: 0;
  align-items: top;
  flex-direction: row;
  flex-wrap: wrap;
`;
