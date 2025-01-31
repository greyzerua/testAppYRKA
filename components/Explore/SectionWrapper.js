import React from "react";
import {Pressable, Text, View} from "react-native";
import ArrowRight from "../icons/arrow-right";

export const SectionWrapper = ({children, title, styleSection}) => {
    return (
        <View className={styleSection}>
            <View className='flex-row justify-between items-center pl-4 pr-4 pb-2'>
                <Text className='font-Inter font-medium text-textPrimary text-xl'>{title}</Text>
                <Pressable>
                    <Text className='font-Inter text-textSecondary text-sm'>See All <ArrowRight/></Text>
                </Pressable>
            </View>
            {children}
        </View>
    )
}