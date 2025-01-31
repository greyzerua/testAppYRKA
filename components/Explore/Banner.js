import React from "react";
import {Pressable, Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import BannerImgBig from "../icons/banner-img-big";
import BannerImgSmall from "../icons/banner-img-small";


export const Banner = () => {
    return (
        <Pressable className='mt-4'>
            <LinearGradient
                colors={['#59B0FF', '#925FFF']}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                className=" min-h-[82px] rounded-[12px] p-[1px]"
            >
                <LinearGradient
                    colors={['#4A33A8', '#3354AB']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    className="flex-1 rounded-[12px] justify-center pl-4 relative"
                >
                    <Pressable className="gap-[2px]">
                        <Text className="text-white text-base font-Inter font-medium">Start Your Free 3-Day
                            Premium</Text>
                        <Text className="text-textSecondary text-sm font-Inter ">Click to get started now.</Text>

                    </Pressable>
                    <BannerImgBig className={'absolute bottom-0 right-0 z-10'}/>
                    <BannerImgSmall className={'absolute bottom-0 right-[62]'}/>
                </LinearGradient>
            </LinearGradient>
        </Pressable>
    )
}