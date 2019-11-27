/**
 * External dependencies
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import MediaContext from '../../media/context';
import MediaList from '../mediaList';

const DUMMY_MEDIA_CONTEXT = {
	state: { media: [ { id: 1, title: 'Dummy media item', data: 'about:blank' } ] },
};

describe( 'MediaList', () => {
	it( 'should render media items correctly', () => {
		const { getByText } = render(
			<MediaList />,
			{ wrapper: DummyMediaProvider },
		);

		expect( getByText( 'Dummy media item' ) ).toBeInTheDocument();
	} );
} );

// Utility functions go here - will get hoisted
function DummyMediaProvider( { children } ) {
	return (
		<MediaContext.Provider value={ DUMMY_MEDIA_CONTEXT }>
			{ children }
		</MediaContext.Provider>
	);
}

DummyMediaProvider.propTypes = {
	children: PropTypes.any.isRequired,
};
