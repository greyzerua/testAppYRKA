import React, { useRef } from "react";
import {View, Pressable} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import {Header} from "../components/Header";
import NavigationBarIcon from "../components/icons/navigation-bar-icon";
import ShareIcon from "../components/icons/share-icon";
import {Message} from "../components/Chat/Message";
import {SendMessage} from "../components/Chat/SendMessage";
import {useChat} from "../hooks/useChat";
import {SafeAreaView} from "react-native-safe-area-context";


export const Chat = () => {
    const flatListRef = useRef(null);

    const {
        currentChat,
        streamingMessageId,
        sendMessage,
        onEndStream
    } = useChat();

    return (
        <SafeAreaView className="flex-1 bg-bgPrimary">
            <View className="pl-4 pr-4 pb-6 pt-4">
                <Header title={"Chat"}>
                    <View className='flex-row gap-2.5'>
                        <Pressable>
                            <NavigationBarIcon/>
                        </Pressable>
                        <Pressable>
                            <ShareIcon/>
                        </Pressable>
                    </View>
                </Header>
            </View>

            <FlatList
                ref={flatListRef}
                data={currentChat.messages}
                contentContainerStyle={{paddingBottom: 9, justifyContent: 'flex-end', flexGrow: 1}}
                keyboardShouldPersistTaps="handled"
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Message item={item} onEndStream={onEndStream} isStreaming={streamingMessageId === item.id} />
                )}
                onContentSizeChange={() => flatListRef.current.scrollToEnd({animated: true})} />
            <SendMessage isStreaming={!!streamingMessageId} sendMessage={sendMessage}/>
        </SafeAreaView>
    );
};
