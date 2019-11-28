/**
 * External dependencies
 */
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import { useMedia } from '../media';
import Button from './button';
import StringInputGroup from './stringInputGroup';
import FileInputGroup from './fileInputGroup';
import Preview from './preview';

function Upload( { handleComplete } ) {
	const [ title, setTitle ] = useState( '' );
	const [ imageData, setImageData ] = useState( '' );
	const { actions: { addMedia } } = useMedia();

	const handleImageChanged = useCallback( ( file ) => {
		const reader = new window.FileReader();
		reader.onload = ( e ) => setImageData( e.target.result );
		reader.readAsDataURL( file );
	}, [] );

	const handleTitleChanged = useCallback( ( evt ) => setTitle( evt.target.value ), [] );

	const handleCancel = useCallback( ( evt ) => {
		evt.preventDefault();
		handleComplete();
	}, [ handleComplete ] );

	const handleSubmit = useCallback( ( evt ) => {
		evt.preventDefault();
		addMedia( { title, data: imageData } )
			.then( handleComplete );
	}, [ addMedia, title, imageData, handleComplete ] );

	return (
		<form onSubmit={ handleSubmit }>
			<Title>
				{ 'Add new image' }
			</Title>
			<Fieldset>
				<StringInputGroup label="Image title" value={ title } onChange={ handleTitleChanged } />
				<FileInputGroup label="Select file" onFileChange={ handleImageChanged } />
				{ imageData && <Preview data={ imageData } /> }
				<Buttons>
					<Button isNarrow isOutline type="button" onClick={ handleCancel }>
						{ 'Cancel' }
					</Button>
					<Button isNarrow>
						{ 'Upload' }
					</Button>
				</Buttons>
			</Fieldset>
		</form>
	);
}

export default Upload;

Upload.propTypes = {
	handleComplete: PropTypes.func.isRequired,
};

const Fieldset = styled.fieldset`
  color: black;
  width: 30rem;
  border: 1px solid #DADCE0;
  border-radius: .5rem;
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
`;

const Title = styled.h2`
	font-size: 1.5rem;
	line-height: 1.1;
	margin: 0 0 1rem;
	font-weight: normal;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  * {
    margin-left: 1em;
  }
`;
