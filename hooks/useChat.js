import {useRoute} from "@react-navigation/native";
import {useEffect, useState} from "react";
import uuid from "react-native-uuid";
import {Keyboard} from "react-native";
import {updateChatInStorage} from "../utils/storage";
import {PLACEHOLDER_MESSAGES} from "../constants";




export const useChat = () => {
    const {params: {chat}} = useRoute();

    const [currentChat, setCurrentChat] = useState(chat);
    const [streamingMessageId, setStreamingMessageId] = useState(null);

    const sendMessage = (message) => {
        const botText = PLACEHOLDER_MESSAGES[Math.floor(Math.random() * PLACEHOLDER_MESSAGES.length)];
        const userMessage = {id: uuid.v4(), text: message, sender: 'user'};
        const botMessage = {id: uuid.v4(), text: botText, sender: 'system'};
        setCurrentChat(prev => ({
            ...prev,
            messages: [...prev.messages, userMessage, botMessage]
        }));
        setStreamingMessageId(botMessage.id);
        Keyboard.dismiss();
    };

    useEffect(() => {
        updateChatInStorage(currentChat);
    }, [currentChat])

    const onEndStream = () => {
        setStreamingMessageId(null);
    }

    return {
        currentChat,
        streamingMessageId,
        sendMessage,
        onEndStream
    };
}
