/**
 * External dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Internal dependencies
 */
import App from './app';

// includes dummy API - can also be conditionally require()'d
import './server';

ReactDOM.render( <App />, document.getElementById( 'root' ) );
