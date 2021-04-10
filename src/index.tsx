import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider,InMemoryCache,ApolloClient } from '@apollo/client'
import React from 'react';

const client = new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql',
  cache: new InMemoryCache()
})


ReactDOM.render(
  <ApolloProvider client={client}>
 <App />
 </ApolloProvider>
 ,
  document.getElementById('root')
);