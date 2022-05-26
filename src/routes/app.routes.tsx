import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

import { Home } from '../screens/Home';
import { Agent } from '../screens/Agent';

export function AppRoutes() {

    return (
        <Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Home" component={Home} />
            <Screen name="Agent" component={Agent} />
        </Navigator>
    )
}