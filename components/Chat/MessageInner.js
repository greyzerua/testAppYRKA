import React from "react";
import {Text, View} from "react-native";
import {ChatMessageCopyButton} from "./ChatMessageCopyButton";
import {ChatSharedButton} from "./ChatSharedButton";
import {StreamedMessage} from "./StreamedMessage";

const messageStyles = 'text-white font-Inter text-base';

export const MessageInner = ({item, onEndStream, isStreaming}) => {
    return (
        <>
            {
                isStreaming ?
                    <StreamedMessage text={item.text} onEndStream={onEndStream} messageStyles={messageStyles}/> :
                <Text className={messageStyles}>{item.text}</Text>
            }
            <View className={`flex-row gap-2  mt-2 ${item.sender === 'user' && 'justify-end'}`}>
                <View>
                    <ChatMessageCopyButton/>
                </View>
               <View>
                   <ChatSharedButton/>
               </View>

            </View>
        </>
    )
};

