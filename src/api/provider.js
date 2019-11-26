import React, {useCallback} from 'react';

import APIContext from './context';

function APIProvider({children}) {
  const url = '/api/media';

  const getMedia = useCallback(() => {
    return fetch(url)
      .then(r => r.json());
  }, []);

  const postMedia = useCallback((data) => {
    const body = JSON.stringify(data);
    return fetch(url, {method: 'POST', body})
      .then(r => r.json());
  }, []);

  const value = {
    state: {},
    actions: {
      getMedia,
      postMedia,
    }
  };
  return (
    <APIContext.Provider value={value}>
      {children}
    </APIContext.Provider>
  )
}

export default APIProvider;
