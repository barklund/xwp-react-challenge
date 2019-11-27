/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { renderHook, act } from '@testing-library/react-hooks';

/**
 * Internal dependencies
 */
import APIContext from '../../api/context';
import { MediaProvider, useMedia } from '../';

const getMedia = jest.fn();
const postMedia = jest.fn();

const DUMMY_MEDIA_1 = { id: 1 };
const DUMMY_MEDIA_2 = { id: 2 };
const DUMMY_MEDIA_3 = { id: 3 };

function FakeWrapper( { children } ) {
	const value = { actions: { getMedia, postMedia } };
	return (
		<APIContext.Provider value={ value }>
			<MediaProvider>
				{ children }
			</MediaProvider>
		</APIContext.Provider>
	);
}
FakeWrapper.propTypes = { children: PropTypes.any.isRequired };

function setup() {
	return renderHook( () => useMedia(), { wrapper: FakeWrapper } );
}

describe( 'MediaProvider', () => {
	it( 'should load media from api on instantiation', async () => {
		getMedia.mockImplementationOnce( () => Promise.resolve( [ DUMMY_MEDIA_1, DUMMY_MEDIA_2 ] ) );

		let useMediaHook;

		await act( async () => {
			useMediaHook = setup();
			await useMediaHook.waitForNextUpdate();
		} );

		const { state: { media } } = useMediaHook.result.current;

		expect( getMedia ).toHaveBeenCalledTimes( 1 );
		expect( media ).toStrictEqual( [ DUMMY_MEDIA_1, DUMMY_MEDIA_2 ] );
	} );

	it( 'should add media via api and update state', async () => {
		getMedia.mockImplementationOnce( () => Promise.resolve( [ DUMMY_MEDIA_1, DUMMY_MEDIA_2 ] ) );
		postMedia.mockImplementationOnce( ( input ) => Promise.resolve( input ) );

		let useMediaHook;

		await act( async () => {
			useMediaHook = setup();
			await useMediaHook.waitForNextUpdate();
		} );

		const { actions: { addMedia } } = useMediaHook.result.current;

		await act( async () => {
			addMedia( DUMMY_MEDIA_3 );
			await useMediaHook.waitForNextUpdate();
		} );

		const { state: { media } } = useMediaHook.result.current;

		expect( postMedia ).toHaveBeenCalledTimes( 1 );
		expect( postMedia ).toHaveBeenCalledWith( DUMMY_MEDIA_3 );
		expect( media ).toStrictEqual( [ DUMMY_MEDIA_1, DUMMY_MEDIA_2, DUMMY_MEDIA_3 ] );
	} );
} );
