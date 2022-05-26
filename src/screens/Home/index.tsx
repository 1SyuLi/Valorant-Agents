import React from 'react';
import { StatusBar } from 'expo-status-bar';

import logo from '../../assets/valorant.png';

import {
    Container,
    Header,
    Logo,
    Title,
} from './styles';

export function Home() {
    return (
        <Container>
            <StatusBar style='light' />

            <Header>
                <Logo source={logo} />
                <Title>Valorant Agents</Title>
            </Header>
        </Container>
    );
}