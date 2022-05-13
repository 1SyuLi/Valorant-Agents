import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/Global/styles/theme';

import { Home } from './src/screens/Home';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
}
