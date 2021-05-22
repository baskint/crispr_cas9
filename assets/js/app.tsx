
import React from 'react';

import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme, { muiTheme } from './theme';

import Home from './pages/Home';
import ButtonAppBar from './components/AppBar';
import GeneEditingContainer from './pages/GeneEditingTools';
import DiagnosticToolsContainer from './pages/DiagnosticTools';

export const Providers: React.FC = ({ children }) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          {children}
        </RecoilRoot>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

const App: React.FC = () => (
  <Providers>
    <Router>
      <ButtonAppBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/gene-editing">
          <GeneEditingContainer />
        </Route>
        <Route exact path="/diagnostics">
          <DiagnosticToolsContainer />
        </Route>
      </Switch>
    </Router>
  </Providers>
);

export default App;