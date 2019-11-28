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

function Layout() {
	const [ hasUpload, setHasUpload ] = useState( false );
	return (
		<Wrapper>
			<AppStyle />
			<Title>
				{ 'Media Library' }
			</Title>
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

const Wrapper = styled.main`
  width: 66em;
  margin: 4em auto;
  padding: 3em;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: 4rem;
  font-weight: normal;
`;

const AppStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  html {
    margin: 0;
    background: #33373B;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
