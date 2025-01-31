import React from 'react';
import {View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Input} from "../Input";
import ScanIcon from "../icons/scan-icon";
import {VoiceButton} from "../VoiceButton";

export const ExploreInputGroup = () => {
    return (
        <View className='flex-row justify-center items-center pl-4 pr-4 pt-4 pb-3.5  '>
            <View
                className=
                    'absolute top-0 left-[0px] right-[0px]
                    border-t-[1px]  border-l-[0.2px] border-r-[0.2px] rounded-[16px] rounded-b-[0px]
                    h-4 border-bgSecondary'/>
            <View style={{borderRadius: 13, boxShadow: '0 0px 8px 0px rgba(92, 52, 178, 0.7)'}}>
                <LinearGradient
                    colors={['#59B0FF', '#925FFF']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="rounded-[13px] p-[1px] max-w-[302px] w-[302px] "

                >
                    <Input inputStyle={'rounded-[12px] pl-[51px] '} placeholder={'Enter text here...'}
                           icon={<ScanIcon/>}/>
                </LinearGradient>
            </View>
            <View className='ml-2'>
                <VoiceButton/>
            </View>
        </View>
    );
};
