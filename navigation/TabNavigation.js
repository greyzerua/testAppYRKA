import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Explore} from '../screens/Explore';
import ExploreTabIcon from "../components/icons/explore-tab-icon";
import {Task} from "../screens/Task";
import {History} from "../screens/History";
import TaskTabIcon from "../components/icons/task-tab-icon";
import HistoryTabIcon from "../components/icons/history-tab-icon";
import {Platform} from "react-native";

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
    return (
        <Tab.Navigator
            id="MainTabNavigator"
            screenOptions={() => ({
                tabBarActiveTintColor: '#FFF',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle:
                    {
                        backgroundColor: '#1C1D22',
                        borderTopWidth: 0,
                        paddingBottom: Platform.OS === 'android' ? 10 : 0,
                        height: Platform.OS === 'android' ? 60 : 50,
                    },
                headerStyle: {
                    backgroundColor: {backgroundColor: '#1C1D22'},
                },
                tabBarLabelStyle: {
                    fontWeight: 'medium',
                    fontSize: 12,
                    fontFamily: 'Inter',
                }
            })}
        >
            <Tab.Screen
                name="ExploreScreen"
                component={Explore}
                options={{
                    tabBarLabel: "Explore",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <ExploreTabIcon color={focused ? '#FFF' : '#6C6C76'}/>
                    )
                }}
            />

            <Tab.Screen
                name="Task"
                component={Task}
                options={{
                    tabBarLabel: "Task",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TaskTabIcon color={focused ? '#FFF' : '#6C6C76'}/>
                    )
                }}
            />

            <Tab.Screen
                name="History"
                component={History}
                options={{
                    tabBarLabel: "History",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <HistoryTabIcon color={focused ? '#FFF' : '#6C6C76'}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
};


