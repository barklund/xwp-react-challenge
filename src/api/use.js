import {useContext} from 'react';

import APIContext from './context';

function useAPI() {
  return useContext(APIContext);
}

export default useAPI;
