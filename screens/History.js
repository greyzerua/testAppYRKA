import React from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from "../components/Header";
import {Connects} from "../components/Explore/Сonnects";
import {useGetChats} from "../hooks/useGetChats";

export const History = () => {
    const {chats} = useGetChats();
    return (
        <SafeAreaView className="flex-1 bg-bgPrimary">
            <View className="pl-4 pr-4 pb-6 pt-4">
                <Header title={'History'}>
                    <Connects/>
                </Header>
                <FlatList
                    data={chats}
                    renderItem={({item}) => (
                        <Pressable
                            key={item.id}
                            className="bg-bgSecondary p-3 rounded-xl mt-5"
                        >
                            <View className="text-left justify-between">
                                <Text className="text-lg font-Inter text-white mb-2">
                                    {item.selectedEntity}
                                </Text>
                                <View className="flex-row items-center justify-between">
                                    <Text
                                        className="text-lg font-Inter text-white max-w-[75%] overflow-hidden"
                                        numberOfLines={2}
                                        ellipsizeMode="tail"
                                    >
                                        {item.messages[item.messages.length - 1].text}
                                    </Text>
                                    <Text className="text-sm font-Inter text-white">
                                        {item.type}
                                    </Text>
                                </View>
                            </View>
                        </Pressable>
                    )}
                    keyExtractor={item => item.id}
                />

            </View>
        </SafeAreaView>
    );
};
