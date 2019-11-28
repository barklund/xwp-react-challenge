/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Preview( { data } ) {
	return (
		<Group>
			<Label>
				{ 'Preview:' }
			</Label>
			<PreviewHolder>
				<Image src={ data } alt="Preview image" />
			</PreviewHolder>
		</Group>
	);
}

Preview.propTypes = {
	data: PropTypes.string.isRequired,
};

export default Preview;

const Image = styled.img`
  max-width: 100%;
  max-height: 20rem;
`;

const PreviewHolder = styled.div`
  flex: 1 1 20rem;
`;

const Label = styled.span`
  width: 6rem;
`;

const Group = styled.div`
  display: flex;
  margin: 1rem 0;
  font-size: .9rem
`;
