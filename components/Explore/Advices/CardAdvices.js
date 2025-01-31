import React from "react";
import {View, Text} from "react-native";

export const CardAdvices = ({title, image}) => {
    return (
        <View className="rounded-xl bg-bgSecondary min-w-[346px] mb-2">
            <View className=' flex-row p-3'>
                {image}
                <Text className='max-w-[282px] ml-2 text-textSecondary font-Inter text-xs'>{title}</Text>
            </View>

        </View>
    );
};
export default CardAdvices;
