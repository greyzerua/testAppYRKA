import React from "react";
import {LinearGradient} from "expo-linear-gradient";

export const MessageGradient = ({children}) => {
    return (
        <LinearGradient
            className="ml-[39px] mr-[9px] rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[4px] mt-3"
            colors={['#4c6bc1', '#5C34B1']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1.3 }}
        >
            {children}
        </LinearGradient>
    );
};
