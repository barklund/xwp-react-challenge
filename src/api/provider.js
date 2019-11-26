/**
 * External dependencies
 */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import APIContext from './context';

function APIProvider( { children } ) {
	const url = '/api/media';

	const getMedia = useCallback( () => {
		return window.fetch( url )
			.then( ( r ) => r.json() );
	}, [] );

	const postMedia = useCallback( ( data ) => {
		const body = JSON.stringify( data );
		return window.fetch( url, { method: 'POST', body } )
			.then( ( r ) => r.json() );
	}, [] );

	const value = {
		state: {},
		actions: {
			getMedia,
			postMedia,
		},
	};
	return (
		<APIContext.Provider value={ value }>
			{ children }
		</APIContext.Provider>
	);
}

APIProvider.propTypes = {
	children: PropTypes.oneOfType( [
		PropTypes.arrayOf( PropTypes.node ),
		PropTypes.node,
	] ).isRequired,
};

export default APIProvider;
