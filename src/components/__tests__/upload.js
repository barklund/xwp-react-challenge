/**
 * External dependencies
 */
import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import MediaContext from '../../media/context';
import Upload from '../upload';

const addMedia = jest.fn();
const DUMMY_MEDIA_CONTEXT = {
	actions: { addMedia },
};

const uploadButton = 'Upload';
const cancelButton = 'Cancel';
const previewImageAltText = 'Preview image';

const imageBytes = 'firefighter-bytes-go-here';

describe( 'Upload', () => {
	it( 'should cancel by invoking complete callback and not call the api', () => {
		const handleComplete = jest.fn();
		const { getByText } = render(
			<Upload handleComplete={ handleComplete } />,
			{ wrapper: DummyMediaProvider },
		);

		expect( getByText( cancelButton ) ).toBeInTheDocument();

		fireEvent.click( getByText( cancelButton ) );

		expect( handleComplete ).toHaveBeenCalledWith();
		expect( addMedia ).not.toHaveBeenCalled();
	} );

	it( 'should display preview when image is selected', async () => {
		const handleComplete = jest.fn();
		const { getByAltText, getByLabelText } = render(
			<Upload handleComplete={ handleComplete } />,
			{ wrapper: DummyMediaProvider },
		);

		await act( async () => {
			fireEvent.change( getByLabelText( /select file/i ), { target: { files: [ getDummyFile() ] } } );

			await waitForElement( () => getByAltText( previewImageAltText ) );
		} );

		const dataURI = getDataURI();

		expect( getByAltText( previewImageAltText ) ).toHaveProperty( 'src', dataURI );
	} );

	it( 'should submit by invoking api with input data and then invoke complete callback', async () => {
		const handleComplete = jest.fn();
		addMedia.mockImplementationOnce( ( o ) => Promise.resolve( o ) );
		const { getByText, getByLabelText, getByAltText } = render(
			<Upload handleComplete={ handleComplete } />,
			{ wrapper: DummyMediaProvider },
		);

		await act( async () => {
			fireEvent.change( getByLabelText( /image title/i ), { target: { value: 'Firefighter' } } );

			fireEvent.change( getByLabelText( /select file/i ), { target: { files: [ getDummyFile() ] } } );

			await waitForElement( () => getByAltText( previewImageAltText ) );

			fireEvent.click( getByText( uploadButton ) );
		} );

		const expectedNewMedia = {
			title: 'Firefighter',
			data: getDataURI(),
		};

		expect( addMedia ).toHaveBeenCalledWith( expectedNewMedia );

		expect( handleComplete ).toHaveBeenCalledTimes( 1 );
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

function getDataURI() {
	return `data:image/jpeg;base64,${ window.btoa( imageBytes ) }`;
}

function getDummyFile() {
	return new window.File( [ imageBytes ], 'firefighter.png', { type: 'image/jpeg' } );
}

