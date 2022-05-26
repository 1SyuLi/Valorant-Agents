import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
    Container
} from './styles';

export function Agent() {
    return (
        <Container>
            <StatusBar style='light' />
        </Container>
    );
}