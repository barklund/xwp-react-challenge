import React from 'react';

import Layout from './components/layout';
import {APIProvider} from './api';
import {MediaProvider} from './media';

function App() {
  return (
    <APIProvider>
      <MediaProvider>
        <Layout />
      </MediaProvider>
    </APIProvider>
  );
}

export default App;
