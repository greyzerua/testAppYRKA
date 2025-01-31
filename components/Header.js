import React from "react";
import {Pressable, Text, View} from "react-native";
import SettingIcon from "./icons/settings-icon";

export const Header = ({title, children}) => {
    return (
        <View className=" flex-row items-center justify-between ">
            <Pressable>
                <SettingIcon/>
            </Pressable>
            <View className="absolute left-0 right-0 items-center">
                <Text className="font-Inter text-xl text-textPrimary font-medium">
                    {title}
                </Text>
            </View>
            {children}
        </View>
    )
}