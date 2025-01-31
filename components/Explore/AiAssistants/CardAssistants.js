import React from "react";
import {ImageBackground, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

export const CardAssistants = ({text, image}) => {
    return (
        <View className=' min-w-[110px] min-h-[110px] bg-bgSecondary rounded-2xl '>
            <ImageBackground
                resizeMode={'contain'}
                className='flex-1 justify-center'
                source={image}
            />
            <View className='absolute w-full -bottom-3.5'>
                <LinearGradient
                    colors={['#59B0FF', '#925FFF']}
                    start={{x: 0.5, y: 0}}
                    end={{x: 1, y: 1}}
                    className=" min-h-[26px] rounded-[48px] p-[1px]"
                >
                    <LinearGradient
                        colors={['#448ACA', '#5C34B1']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                        className="flex-1 rounded-[48px] justify-center items-center"
                    >
                        <View>
                            <Text className="text-white text-xs font-Inter font-medium">{text}</Text>
                        </View>
                    </LinearGradient>
                </LinearGradient>
            </View>
        </View>
    )
}