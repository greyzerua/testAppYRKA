
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StackNavigator} from './StackNavigation';

import {StatusBar} from "expo-status-bar";
import {Wrapper} from "../components/Wrapper";

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar style="light"/>
            <Wrapper>
                <StackNavigator />
            </Wrapper>


        </NavigationContainer>
    );
};

