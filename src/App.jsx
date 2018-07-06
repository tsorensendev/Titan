import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import ApolloClient from 'apollo-client';

// Routes
import indexRoutes from './routes';

// CSS
import './assets/scss/styles.css';

const hist = createBrowserHistory();

const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql',
});

const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: localStorage.getItem('token') || null,
    },
  });
  return forward(operation);
});

const link = middlewareLink.concat(httpLink);

const cache = new InMemoryCache({
  dataIdFromObject: o => o.id,
});

// Setup Apollo Client
const client = new ApolloClient({
  link,
  cache,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map(route => (
            <Route
              path={route.path}
              key={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
