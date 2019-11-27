/**
 * External dependencies
 */
import { renderHook } from '@testing-library/react-hooks';

/**
 * Internal dependencies
 */
import { APIProvider, useAPI } from '../';
import server from '../../server';

function setup() {
	return renderHook( () => useAPI(), { wrapper: APIProvider } );
}

describe( 'APIProvider', () => {
	beforeAll( () => {
		server.logging = false;
	} );
	beforeEach( () => {
		server.db.emptyData();
	} );

	it( 'should get media', async () => {
		const api = setup();
		const { actions: { getMedia } } = api.result.current;

		const mediaList = [
			{ id: '1', title: 'Image A', data: 'about:blank' },
		];
		server.db.loadData( { media: mediaList } );
		const result = await getMedia();
		const expected = mediaList;
		expect( result ).toStrictEqual( expected );
	} );

	it( 'should post media', async () => {
		const api = setup();
		const { actions: { postMedia } } = api.result.current;

		const newMedia = { title: 'Image A', data: 'about:blank' };

		server.db.loadData( { media: [] } );
		const result = await postMedia( newMedia );
		const expected = { id: expect.any( String ), ...newMedia };
		expect( result ).toStrictEqual( expected );
		expect( server.db.media ).toHaveLength( 1 );
		expect( server.db.media ).toContainEqual( expected );
	} );
} );
