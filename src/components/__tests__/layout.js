/**
 * External dependencies
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import MediaContext from '../../media/context';
import Layout from '../layout';

const DUMMY_MEDIA_CONTEXT = {
	state: { media: [ { id: 1, title: 'Dummy', data: 'about:blank' } ] },
	actions: { addMedia: jest.fn() },
};

describe( 'Layout', () => {
	it( 'should open and close upload form correctly', () => {
		const showUploadButton = 'Upload new image';
		const cancelUploadButton = 'Cancel';
		const { getByText, queryByText } = render(
			<Layout />,
			{ wrapper: DummyMediaProvider },
		);

		// Initially we have an upload button and no cancel button
		expect( getByText( showUploadButton ) ).toBeInTheDocument();
		expect( queryByText( cancelUploadButton ) ).toBeNull();

		fireEvent.click( getByText( showUploadButton ) );

		// After click, we have a cancel button and no upload button
		expect( getByText( cancelUploadButton ) ).toBeInTheDocument();
		expect( queryByText( showUploadButton ) ).toBeNull();

		fireEvent.click( getByText( cancelUploadButton ) );

		// And we're back to having an upload button and no cancel button
		expect( getByText( showUploadButton ) ).toBeInTheDocument();
		expect( queryByText( cancelUploadButton ) ).toBeNull();
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
