/**
 * External dependencies
 */
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

/**
 * Internal dependencies
 */
import MediaList from './mediaList';
import Upload from './upload';
import Button from './button';

const Wrapper = styled.main`
  width: 40em;
  margin: 2em auto;
  padding: 1em;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0 0 1rem;
  font-size: 4rem;
`;

const AppStyle = createGlobalStyle`
  html {
    margin: 0;
    background: #bbb;
    font-family: Georgia, Times New Roman, serif;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

function Layout() {
	const [ hasUpload, setHasUpload ] = useState( false );
	return (
		<Wrapper>
			<AppStyle />
			<Title>Media Library</Title>
			{ hasUpload ?
				<Upload handleComplete={ () => setHasUpload( false ) } /> :
				<Button onClick={ () => setHasUpload( true ) }>
					{ 'Upload new image' }
				</Button>
			}
			<MediaList />
		</Wrapper>
	);
}

export default Layout;
