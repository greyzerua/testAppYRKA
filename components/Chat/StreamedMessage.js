import {useEffect, useRef, useState} from "react";
import {Text} from "react-native";

export const StreamedMessage = ({text, onEndStream, messageStyles}) => {
    const [streamedText, setStreamedText] = useState('');
    const streamRef = useRef(null);

    const streamMessage = () => {
        let index = 0;
        const streamText = () => {
            if (index < text.length) {
                setStreamedText(text.slice(0, index + 1))
                index++;
                streamRef.current = setTimeout(streamText, 50);
            } else {
                onEndStream();
            }
        };
        streamText();
    };

    useEffect(() => {
        streamMessage();
    }, [text]);

    return (
        <Text className={messageStyles}>{streamedText}</Text>
    );
};
