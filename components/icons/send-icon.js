import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SendIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            {...props}
        >
            <Rect width={48} height={48} rx={16} fill="url(#paint0_linear_2_4061)" />
            <Path
                d="M15.034 14.075a.713.713 0 00-1.02.779l2.004 6.929a.715.715 0 00.567.505l8.13 1.362c.382.076.382.624 0 .7l-8.13 1.361a.714.714 0 00-.567.506l-2.004 6.929a.714.714 0 001.02.779l18.572-9.286a.715.715 0 000-1.278l-18.572-9.286z"
                fill="#fff"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_2_4061"
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

export default SendIcon
