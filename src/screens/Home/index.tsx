import React from 'react';
import { StatusBar } from 'expo-status-bar';

import logo from '../../assets/valorant.png';
import { Card } from './Card';

import {
    Container,
    Header,
    Logo,
    Title,
    Content,
} from './styles';

export function Home() {
    return (
        <Container>
            <StatusBar style='light' />

            <Header>
                <Logo source={logo} />
                <Title>Valorant Agents</Title>
            </Header>

            <Content>
                <Card image='' />
            </Content>
        </Container>
    );
}