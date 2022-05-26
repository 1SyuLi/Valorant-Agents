import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/Global/styles/theme';
import { UseCachedResources } from './src/hooks/UseCachedResources';

import { Home } from './src/screens/Home';

export default function App() {
    const isLoadingComplete = UseCachedResources();

    if (!isLoadingComplete) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
}
