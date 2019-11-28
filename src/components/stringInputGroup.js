/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import InputGroup, { Input } from './inputGroup';

function StringInputGroup( { label, value, onChange } ) {
	return (
		<InputGroup label={ label }>
			<Input value={ value } onChange={ onChange } />
		</InputGroup>
	);
}

export default StringInputGroup;

StringInputGroup.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
