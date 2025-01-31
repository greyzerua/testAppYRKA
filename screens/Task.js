import React from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from "../components/Header";
import {Connects} from "../components/Explore/Сonnects";

export const Task = () => {
    return (
        <SafeAreaView className="flex-1 bg-bgPrimary ">
            <View className='pl-4 pr-4 pb-6 pt-4'>
                <Header title={'Task'}><Connects/></Header>
            </View>

        </SafeAreaView>
    );
};
