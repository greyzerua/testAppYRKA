import React from "react";
import {Pressable} from "react-native";
import {ChatButton} from "./ChatButton";
import ShareIcon from "../icons/share-icon";

export const ChatSharedButton = () => {
    return (
        <Pressable>
            <ChatButton icon={<ShareIcon width={16} height={16}/>} title={'Share'}/>
        </Pressable>
    )
}