/**
 * External dependencies
 */
import { Server } from 'miragejs';

/**
 * Internal dependencies
 */
import media from './db.media.fixture.json';

const restServer = new Server( {
	seeds( server ) {
		server.db.loadData( { media } );
	},
	routes() {
		this.get( '/api/media', ( schema ) => schema.db.media );
		this.post( '/api/media', ( schema, request ) => {
			const mediaObject = JSON.parse( request.requestBody );
			return schema.db.media.insert( mediaObject );
		} );
	},
} );

export default restServer;
