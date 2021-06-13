import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  credentials: 'same-origin',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
);
