import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';
import { CartStateProvider } from './app/state/CartState';

const client = new ApolloClient({
  uri: '/graphql',
  credentials: 'same-origin',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <CartStateProvider>
        <App />
      </CartStateProvider>
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
);
