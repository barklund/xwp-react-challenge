/**
 * External dependencies
 */
import { useContext } from 'react';

/**
 * Internal dependencies
 */
import APIContext from './context';

function useAPI() {
	return useContext( APIContext );
}

export default useAPI;
