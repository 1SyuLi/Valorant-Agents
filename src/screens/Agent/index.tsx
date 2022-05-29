import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Role } from '../Home';

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
    Skills,
} from './styles';
import { SkillCard } from './SkillCard';

interface Agents {
    agent: {
        id: string;
        name: string;
        image: string;
        background: string;
        role: Role;
    }
}

export function Agent() {
    const navigation = useNavigation();
    const route: any = useRoute();
    const { agent }: Agents = route.params;

    function handleGoBack() {
        navigation.goBack();
    }


    return (
        <Container>
            <StatusBar style='light' />

            <TouchableOpacity onPress={handleGoBack}>
                <BackButton name="chevron-left" />
            </TouchableOpacity>

            <BackGroundImage
                source={{ uri: agent.background }}
            />

            <Header>
                <AgentName>{agent.name}</AgentName>

                <Class>
                    <ClassName>
                        {agent.role.name}
                    </ClassName>

                    <ClassIcon
                        source={{ uri: agent.role.icon }}
                    />
                </Class>

                <ClassDescription>
                    {agent.role.description}
                </ClassDescription>
            </Header>

            <Skills>
                <SkillCard />
                <SkillCard />
                <SkillCard />
            </Skills>
        </Container>
    );
}