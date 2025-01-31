import React, {useState} from "react";
import {KeyboardAvoidingView, Platform, Pressable, Text, View} from "react-native";
import ScanIcon from "../icons/scan-icon";
import {Input} from "../Input";
import ClearIcon from "../icons/clear-icon";
import SendIcon from "../icons/send-icon";
import MicrophoneIcon from "../icons/microphone-icon";

export const SendMessage = ({isStreaming, sendMessage}) => {
    const [message, setMessage] = useState('');

    const onMessageSend = () => {
        if (message.trim() === '') return;
        sendMessage(message);
        setMessage('');
    };

  return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={55}>
          <View className=" flex-row justify-center items-end pt-4 mb-2 mt-2">
              {message.length < 69 && (
                  <View className='absolute top-0 left-[0px] right-[0px] border-t-[1px] border-l-[0.2px] border-r-[0.2px] rounded-[16px] rounded-b-[0px] h-4 border-bgSecondary' />
              )}
              <View className={`flex-row justify-start items-center max-w-[302px] pl-4 w-[302px] bg-bgSecondary rounded-[13px]`}>
                  {!message && <View className=' z-10 pr-[8px] '><ScanIcon /></View>}
                  <Input
                      placeholder="Enter text here..."
                      value={message}
                      onChangeText={setMessage}
                      inputViewStyle={'flex-1'}
                      clearIcon={message && <Pressable onPress={() => setMessage('')}><ClearIcon /></Pressable>}
                  />
              </View>
              <View className='items-end ml-2'>
                  {message.length > 69 && <Text className='text-textPrimary font-Inter font-medium text-[8px] flex-1 '>{message.length}/3000</Text>}
                  <Pressable onPress={onMessageSend} disabled={isStreaming}>
                      {message ? <SendIcon /> : <MicrophoneIcon />}
                  </Pressable>
              </View>
          </View>
      </KeyboardAvoidingView>
  )
}