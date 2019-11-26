/**
 * External dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Internal dependencies
 */
import App from './app';

// includes dummy API - can be conditionally require'd instead if desired
import './server';

ReactDOM.render( <App />, document.getElementById( 'root' ) );
