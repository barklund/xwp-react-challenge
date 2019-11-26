/**
 * External dependencies
 */
import { Server } from 'miragejs';

/**
 * Internal dependencies
 */
import media from './db.media.fixture.json';

// Reason: this is only for dummy REST server
// eslint-disable-next-line no-new
new Server( {
	baseConfg() {
		this.timing = 1000;
	},
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
