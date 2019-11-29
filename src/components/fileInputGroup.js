/**
 * External dependencies
 */
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import Button from './button';
import InputGroup, { Input } from './inputGroup';

function FileInputGroup( { label, onFileChange } ) {
	const [ display, setDisplay ] = useState( 'No file selected' );
	const handleChange = useCallback( ( evt ) => {
		const file = evt.target.files[ 0 ];
		setDisplay( file.name );
		onFileChange( file );
	}, [ onFileChange ] );
	return (
		<InputGroup label={ label }>
			<HiddenInput type="file" onChange={ handleChange } />
			<Button isFake isNarrow>
				{ 'Browse' }
			</Button>
			<FakeInput>
				{ display }
			</FakeInput>
		</InputGroup>
	);
}

export default FileInputGroup;

FileInputGroup.propTypes = {
	label: PropTypes.string.isRequired,
	onFileChange: PropTypes.func.isRequired,
};

const HiddenInput = styled.input`
	// Visually hidden input
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

const FakeInput = styled( Input )
	.attrs( { as: 'div' } )`
	margin-left: 0.5rem;
`;
