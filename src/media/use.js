import {useContext} from 'react';

import MediaContext from './context';

function useMedia() {
  return useContext(MediaContext);
}

export default useMedia;
