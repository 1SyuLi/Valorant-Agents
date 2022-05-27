import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
    Container,
    BackButton,
    BackGroundImage,
    Header,
    AgentName,
    Class,
    ClassName,
    ClassIcon,
    ClassDescription,
} from './styles';

export function Agent() {
    const navigation = useNavigation();
    const route: any = useRoute();
    const { agent } = route.params;

    function handleGoBack() {
        navigation.goBack();
    }


    return (
        <Container>
            <StatusBar style='light' />

            <TouchableOpacity onPress={handleGoBack}>
                <BackButton name="chevron-left" />
            </TouchableOpacity>

            <BackGroundImage source={{ uri: agent.background }} />

            <Header>
                <AgentName>Fade</AgentName>
                <Class>
                    <ClassName>Initiator</ClassName>
                    <ClassIcon
                        source={{ uri: 'https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png' }}
                    />
                </Class>
                <ClassDescription>
                    Initiators challenge angles by setting up their team
                    to enter contested ground and push defenders away.
                </ClassDescription>
            </Header>
        </Container>
    );
}