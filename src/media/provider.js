/**
 * External dependencies
 */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import { useAPI } from '../api';
import MediaContext from './context';

function MediaProvider( { children } ) {
	const [ media, setMedia ] = useState( [] );
	const { actions: { getMedia, postMedia } } = useAPI();

	useEffect( () => {
		getMedia()
			.then( setMedia );
	}, [ getMedia ] );

	const addMedia = useCallback( ( data ) => {
		return postMedia( data )
			.then( ( m ) => setMedia( [ ...media, m ] ) );
	}, [ media, postMedia ] );

	const value = {
		state: {
			media,
		},
		actions: {
			addMedia,
		},
	};

	return (
		<MediaContext.Provider value={ value }>
			{ children }
		</MediaContext.Provider>
	);
}

MediaProvider.propTypes = {
	children: PropTypes.oneOfType( [
		PropTypes.arrayOf( PropTypes.node ),
		PropTypes.node,
	] ).isRequired,
};

export default MediaProvider;
