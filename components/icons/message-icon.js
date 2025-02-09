import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function MessageIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={90}
            height={90}
            viewBox="0 0 24 24"
            fill="none"
            className="icon icon-tabler icons-tabler-filled icon-tabler-message"
            {...props}
        >
            <Defs>
                <LinearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <Stop offset="0%" stopColor="#59B0FF" stopOpacity="1" />
                    <Stop offset="100%" stopColor="#925FFF" stopOpacity="1" />
                </LinearGradient>
            </Defs>
            <Path d="M0 0h24v24H0z" fill="none" />
            <Path
                d="M18 3a4 4 0 014 4v8a4 4 0 01-4 4h-4.724l-4.762 2.857a1 1 0 01-1.508-.743L7 21v-2H6a4 4 0 01-3.995-3.8L2 15V7a4 4 0 014-4zm-4 9H8a1 1 0 000 2h6a1 1 0 000-2m2-4H8a1 1 0 100 2h8a1 1 0 000-2"
                fill="url(#grad1)"
            />
        </Svg>
    );
}

export default MessageIcon;
