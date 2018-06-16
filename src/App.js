import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";

// Routes
import indexRoutes from "routes";

// CSS
import "./assets/scss/styles.css";

const hist = createBrowserHistory();

const networkInterface = createNetworkInterface({
  uri: "/graphql",
  opts: {
    credentials: "same-origin"
  }
});
// Setup Apollo Client
const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router history={hist}>
          <Switch>
            {indexRoutes.map((route, key) => {
              return (
                <Route
                  path={route.path}
                  key={key}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
