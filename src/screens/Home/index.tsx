import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import logo from '../../assets/valorant.png';
import { api } from '../../services/api';
import { Card } from './Card';

import {
    Container,
    Header,
    Logo,
    Title,
    Content,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export type Role = {
    name: string;
    description: string;
    icon: string;
};

interface Agents {
    id: string;
    name: string;
    image: string;
    background: string;
    role: Role;
}

export function Home() {
    const navigation: any = useNavigation();

    const [agents, setAgents] = useState<Agents[]>([]);
    const [loading, setLoading] = useState(true);
    const [load, setLoad] = useState(false);

    function openAgentScreen(agent: Agents) {
        navigation.navigate('Agent', { agent });
    }

    useEffect(() => {
        async function loadAgents() {
            await api.get("/agents", { params: { isPlayableCharacter: true } }).then(response => {
                response.data.data.map(agent => {

                    const formattedAgent: Agents = {
                        id: agent.uuid,
                        name: agent.displayName,
                        image: agent.displayIcon,
                        background: agent.fullPortraitV2,
                        role: {
                            name: agent.role.displayName,
                            description: agent.role.description,
                            icon: agent.role.displayIcon,
                        },
                    }

                    setAgents(oldState => [...oldState, formattedAgent]);
                    // console.log(formattedAgent);
                })
            })
        }

        if (!load) {
            loadAgents();
            setLoad(true);
        }
        setLoading(false);
    }, [])

    return (
        <Container>
            <StatusBar style='light' />

            <Header>
                <Logo source={logo} />
                <Title>Valorant Agents</Title>
            </Header>


            {!loading &&
                <Content>
                    {agents.map(agent =>
                        <Card
                            key={agent.id}
                            image={agent.image}
                            onPress={() => openAgentScreen(agent)}
                        />
                    )}
                </Content>
            }


        </Container>
    );
}