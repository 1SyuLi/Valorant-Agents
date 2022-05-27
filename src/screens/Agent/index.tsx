import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
    Container,
    BackButton,
    BackGroundImage,
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
        </Container>
    );
}