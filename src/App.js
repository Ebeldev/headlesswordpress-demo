import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home'
import Posts from './components/Posts'
import Categories from './components/Categories'

const client = new ApolloClient({
  uri: "http://headless.test/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>

        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/posts/">Posts</Link>
              </li>
              <li>
                <Link to="/categories/">Categories</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" component={Home} exact />
          <Route path="/posts/" component={Posts} />
          <Route path="/categories/" component={Categories} />
        </div>

    </Router>
    </ApolloProvider>
  );
}

export default App;
