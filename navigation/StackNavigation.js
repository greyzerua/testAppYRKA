import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TabNavigator} from './TabNavigation';
import {Chat} from "../screens/Chat";



const Stack = createStackNavigator();
export const StackNavigator = () => {
    return (
        <Stack.Navigator
            id="MainStackNavigator">
            <Stack.Screen name="Explore" component={TabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="Chat" component={Chat} options={{headerShown: false, title: 'Chat'}}/>
        </Stack.Navigator>
    );
};

