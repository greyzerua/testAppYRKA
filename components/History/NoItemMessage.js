import React from "react";
import {Text, View} from "react-native";
import MessageIcon from "../icons/message-icon";

export const NoItemMessage = () => {
    return (
        <View className='flex-1 justify-center items-center'>
            <MessageIcon/>
            <Text className='text-textPrimary text-3xl mt-2 font-Inter'>No created chat.</Text>
            <Text className='text-textPrimary text-base text-center w-4/5 mt-3 font-Inter'>Start a chat with the AI and
                it will appear in your history</Text>
        </View>
    )
}


