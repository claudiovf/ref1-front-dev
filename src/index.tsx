import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';



const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ 
    uri: 'https://ref1-app-backend.herokuapp.com',
    credentials: 'include',
  })
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

