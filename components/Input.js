import React from 'react';
import {View, TextInput} from 'react-native';

export const Input = ({inputStyle = '', inputViewStyle, placeholder, value, onChangeText, icon, clearIcon}) => {
    return (
        <View className={`relative  justify-center ${inputViewStyle}  `} >

            {icon && <View className='absolute z-10 pl-[19px]'>{icon}</View>}
            <TextInput
                style={{
                    fontSize: 16,
                    fontFamily: 'Inter',
                    textAlign: 'left',

                }}
                className={`
                bg-bgSecondary rounded-[13px] max-h-[112px] 
                pr-11 pt-[13px] pb-[13px]  text-textPrimary  ${inputStyle} `}
                placeholder={placeholder}
                placeholderTextColor={'#93939F'}
                value={value}
                onChangeText={onChangeText}
                multiline
                numberOfLines={5}
                scrollEnabled={true}
                maxLength={3000}
            />
            {clearIcon && <View className={'absolute z-10 pr-[19px] right-0  bottom-[12px] '}>{clearIcon}</View>}
        </View>
    )
}