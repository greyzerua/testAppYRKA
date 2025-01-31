import React from "react";
import {View, Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";


export const CardPromts = ({title, subtitle, colorBorder, colorBlock, image}) => {
    return (
        <View className="min-w-[170px] min-h-[116px] rounded-xl p-[1px] flex-1">
            <LinearGradient
                colors={colorBorder}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                className="min-w-[170px] min-h-[116px] rounded-xl p-[1px] flex-1"
            >
                <View className="flex-1 rounded-xl bg-bgPrimary">

                    <LinearGradient
                        colors={colorBlock}
                        start={{x: 0.1, y: 0}}
                        end={{x: 0.9, y: 1}}
                        className="flex-1  min-w-[170px] min-h-[116px] p-3"
                    >
                        <View className='max-w-[145px]'>
                            {image}
                            <Text className='font-Inter font-medium text-sm text-textPrimary mt-2'>{title}</Text>
                            <Text className='font-Inter text-xs text-textSecondary mt-2'>{subtitle}</Text>
                        </View>
                    </LinearGradient>
                </View>
            </LinearGradient>
        </View>
    );
};
export default CardPromts;
