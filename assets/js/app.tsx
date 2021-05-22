
import React from 'react';
import GeneEditingContainer from './pages/GeneEditingTools';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme, { muiTheme } from './theme';
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
      <Switch>
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