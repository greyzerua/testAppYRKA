import React from "react";
import {View} from "react-native";
import {MessageGradient} from "./MessageGradient";
import {MessageInner} from "./MessageInner";

const commonStyles = 'pt-3 pl-4 pr-4 pb-3 rounded-tl-[16px] rounded-tr-[16px]';
export const Message = (props) => {
    if (props.item.sender === 'user') {
        return (
            <MessageGradient>
                <View
                    className={`${commonStyles}`}
                >
                    <MessageInner {...props}/>
                </View>
            </MessageGradient>
        );
    }
    return (
        <View
            className={`${commonStyles}  bg-bgSecondary ml-[23px] mr-[25px] rounded-br-[16px] rounded-bl-[4px] mt-3`}
        >
            <MessageInner {...props}/>
        </View>
    )
}