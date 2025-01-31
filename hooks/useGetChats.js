import {useEffect, useState} from "react";
import {getChats, saveChatsToStorage} from "../utils/storage";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import uuid from "react-native-uuid";

export const useGetChats = () => {
    const isFocused = useIsFocused();

    const navigation = useNavigation();

    const [chats, setChats] = useState([]);

    const getData = async () => {

        const storeChats = await getChats();

        setChats(storeChats);
    };

    useEffect(() => {
        getData();
    }, [isFocused]);


    const createChat = (type, selectedEntity, initialMessage) => {
        const existingChat = chats.find((chat) => chat.type === type && chat.selectedEntity === selectedEntity);

        if (existingChat) {
            navigation.navigate('Chat', { chat: existingChat });
            return;
        }

        const newChat = {
            id: uuid.v4(),
            type,
            selectedEntity,
            messages: [
                {
                    id: uuid.v4(),
                    text: initialMessage,
                    sender: 'system'
                }
            ]
        };
        const updatedChats = [...chats, newChat];
        setChats(updatedChats);
        saveChatsToStorage(updatedChats)
        navigation.navigate('Chat', { chat: newChat });
    };

    const createNewChat = (type, selectedEntity, initialMessage) => {

        const newChat = {
            id: uuid.v4(),
            type,
            selectedEntity,
            messages: [
                {
                    id: uuid.v4(),
                    text: initialMessage,
                    sender: 'system'
                }
            ]
        };
        const updatedChats = [...chats, newChat];
        setChats(updatedChats);
        saveChatsToStorage(updatedChats)
        navigation.navigate('Chat', { chat: newChat });
    };

    return {
        chats,
        createChat,
        createNewChat,
    };
};
