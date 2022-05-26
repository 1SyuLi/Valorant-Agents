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

interface Agents {
    id: string;
    name: string;
    image: string;
}

export function Home() {

    const [agents, setAgents] = useState<Agents[]>([]);
    const [loading, setLoading] = useState(true);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        async function loadAgents() {
            await api.get("/agents", { params: { isPlayableCharacter: true } }).then(response => {
                response.data.data.map(agent => {

                    const formattedAgent = {
                        id: agent.uuid,
                        name: agent.displayName,
                        image: agent.displayIcon,
                    }

                    setAgents(oldState => [...oldState, formattedAgent]);
                    console.log(formattedAgent);
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
                <>
                    <Content>
                        {agents.map(agent => <Card key={agent.id} image={agent.image} />)}
                    </Content>
                </>

            }


        </Container>
    );
}