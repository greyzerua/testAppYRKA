import React from "react";
import {Pressable} from "react-native";
import {ChatButton} from "./ChatButton";
import CopyIcon from "../icons/copy-icon";

export const ChatMessageCopyButton = () => {
    return (
        <Pressable>
            <ChatButton icon={<CopyIcon/>} title={'Copy'}/>
        </Pressable>
    )
}