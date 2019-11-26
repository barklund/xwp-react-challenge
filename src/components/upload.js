import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

import {useMedia} from '../media';
import Button from './button'
import InputGroup from './inputGroup'
import Preview from './preview'

const Fieldset = styled.fieldset`
  color: purple;
  border: 1px solid;
  display: flex;
  flex-direction: column;
`;

const Title = styled.legend``;

const Buttons = styled.div`
  display: flex;
  margin-left: 6em;
  * {
    margin-right: 1em;
  }
`;

function Upload({handleComplete}) {
  const [title, setTitle] = useState('');
  const [imageData, setImageData] = useState('');
  const {actions:{addMedia}} = useMedia();

  const handleImageChanged = useCallback(evt => {
    const reader = new FileReader();
    reader.onload = e => setImageData(e.target.result);
    reader.readAsDataURL(evt.target.files[0]);
  }, []);

  const handleTitleChanged = useCallback(evt => setTitle(evt.target.value), []);

  const handleCancel = useCallback(evt => {
    evt.preventDefault();
    handleComplete();
  }, [handleComplete]);

  const handleSubmit = useCallback(evt => {
    evt.preventDefault();
    addMedia({title, data:imageData})
      .then(handleComplete);
  }, [addMedia, title, imageData, handleComplete]);

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset>
        <Title>Upload new</Title>
        <InputGroup label="Title" name="title" value={title} onChange={handleTitleChanged} />
        <InputGroup label="Image" type="file" name="image" onChange={handleImageChanged} />
        {imageData && <Preview data={imageData} />}
        <Buttons>
          <Button>Upload</Button>
          <Button type="button" isOutline onClick={handleCancel}>Cancel</Button>
        </Buttons>
      </Fieldset>
    </form>
  );
}

export default Upload;
