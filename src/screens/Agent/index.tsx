import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    BackButton,
} from './styles';

export function Agent() {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }


    return (
        <Container>
            <StatusBar style='light' />

            <TouchableOpacity onPress={handleGoBack}>
                <BackButton name="chevron-left" />
            </TouchableOpacity>
        </Container>
    );
}