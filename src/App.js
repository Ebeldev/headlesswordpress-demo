import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Posts from './components/Posts'

const client = new ApolloClient({
  uri: "http://content.etiennebelanger.com/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Welcome to Headless WordPress</h1>
        <Posts />
      </div>
    </ApolloProvider>
  );
}

export default App;
