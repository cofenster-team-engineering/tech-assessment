import type React from 'react';

import { ApolloProvider } from './components/ApolloProvider';
import { GlobalStyles } from './components/GlobalStyles';
import { Route, Router } from './components/Router';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

export const App: React.FC = () => {
  return (
    <ApolloProvider>
      <GlobalStyles />

      <Router>
        <Route route="/">
          <Home />
        </Route>

        <Route route="/projects">
          <Projects />
        </Route>
      </Router>
    </ApolloProvider>
  );
};
