import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function MicrophoneIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            {...props}
        >
            <Rect
                width={48}
                height={48}
                rx={16}
                fill="url(#paint0_linear_1036_109)"
            />
            <Path
                d="M21 18a3 3 0 016 0v5a3 3 0 01-6 0v-5z"
                fill="#fff"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M24 30a7 7 0 01-7-7v-1m7 8a7 7 0 007-7v-1m-7 8v3m0 0h3m-3 0h-3"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_1036_109"
                    x1={-0.00000108251}
                    y1={14}
                    x2={48.2708}
                    y2={43.6242}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#448ACA" />
                    <Stop offset={0.95} stopColor="#5C34B1" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default MicrophoneIcon
