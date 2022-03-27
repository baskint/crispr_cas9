
import React from 'react';

import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import {
  BrowserRouter,
  Routes,
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
    <BrowserRouter>
      <ButtonAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="gene-editing"
          element={<GeneEditingContainer />}
        />
        <Route path="diagnostics"
          element={<DiagnosticToolsContainer />}
        />
      </Routes>
    </BrowserRouter>
  </Providers>
);

export default App;