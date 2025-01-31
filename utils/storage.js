import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveChatsToStorage = async (chats) => {
    try {
        await AsyncStorage.setItem('chats', JSON.stringify(chats));
    } catch (error) {
        console.error("Failed to save chats:", error);
    }
};

export const updateChatInStorage = async (updatedChat) => {
    try {
        const storedChats = await AsyncStorage.getItem('chats');
        const chats = storedChats ? JSON.parse(storedChats) : [];

        const updatedChats = chats.map(chat => chat.id === updatedChat.id ? updatedChat : chat);

        await saveChatsToStorage(updatedChats);

    } catch (error) {
        console.error("Failed to update chat:", error);
    }
};

export const getChats = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('chats');
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (error) {
        console.log(error)
    }
};