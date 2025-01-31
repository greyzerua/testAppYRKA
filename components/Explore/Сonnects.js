import React from "react";

import {LinearGradient} from "expo-linear-gradient";
import {Pressable, Text, View} from "react-native";
import StarIcon from "../icons/star-icon";


export const Connects = () => {
    return (
        <View>
            <LinearGradient
                colors={['#59B0FF', '#925FFF']}
                start={{x: 0.5, y: 0}}
                end={{x: 1, y: 1}}
                className="min-w-[67px] min-h-[32px] rounded-[48px] p-[1px]"
            >
                <LinearGradient
                    colors={['#448ACA', '#5C34B1']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    className="flex-1 rounded-[48px] justify-center items-center"
                >
                    <Pressable className="flex-row gap-[7px] items-center p-1">
                        <StarIcon/>
                        <Text className="text-white text-base font-Inter font-semibold">10</Text>
                    </Pressable>
                </LinearGradient>
            </LinearGradient>
        </View>
    )
}