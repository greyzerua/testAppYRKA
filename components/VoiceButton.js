import React from "react";
import {Pressable} from "react-native";
import MicrophoneIcon from "./icons/microphone-icon";

export const VoiceButton = () => {
  return (
      <Pressable>
          <MicrophoneIcon/>
      </Pressable>
  )
}