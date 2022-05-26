import React from 'react';
import { UseCachedResources } from './src/hooks/UseCachedResources';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/Global/styles/theme';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
    const isLoadingComplete = UseCachedResources();

    if (!isLoadingComplete) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </ThemeProvider>
    );
}
