import React, {useRef} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from "../components/Header";
import {Connects} from "../components/Explore/Сonnects";
import {useGetChats} from "../hooks/useGetChats";
import {HistoryItem} from "../components/History/HistoryItem";
import {FlatList} from "react-native-gesture-handler";
import {NoItemMessage} from "../components/History/NoItemMessage";

export const History = () => {
    const {
        chats, deleteChat
    } = useGetChats();
    const openSwipeableRef = useRef(null);
    return (<SafeAreaView className="flex-1 bg-bgPrimary">
        <View className="pl-4 pr-4 pb-6 pt-4 flex-1">
            <Header title={'History'}>
                <Connects/>
            </Header>
            {chats.length > 0 ?
                <FlatList
                    data={chats}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <HistoryItem item={item} onDelete={deleteChat} openSwipeableRef={openSwipeableRef}/>}
                />
                :
                <NoItemMessage/>
            }

        </View>
    </SafeAreaView>);
};
