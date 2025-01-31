import React from "react";
import {Text, View} from "react-native";

export const ChatButton = ({title, icon}) => {
    return (
        <View className='rounded-[8px] max-w-[76px] flex-row justify-center items-center pt-1.5 pb-1.5 pl-3 pr-3  '
              style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.18)',
              }}>
            <View>{icon}</View>
            <Text className='font-Inter text-xs text-textPrimary ml-[6px]'>{title}</Text>
        </View>
    )
}