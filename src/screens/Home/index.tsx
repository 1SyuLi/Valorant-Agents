import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
    Container
} from './styles';

export function Home() {
    return (
        <Container>
            <StatusBar style='light' />
        </Container>
    );
}