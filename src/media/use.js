/**
 * External dependencies
 */
import { useContext } from 'react';

/**
 * Internal dependencies
 */
import MediaContext from './context';

function useMedia() {
	return useContext( MediaContext );
}

export default useMedia;
