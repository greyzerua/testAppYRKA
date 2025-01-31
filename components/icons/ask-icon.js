import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function AskIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            {...props}
        >
            <Rect width={32} height={32} rx={8} fill="url(#paint0_linear_1_368)" />
            <Path
                d="M24.71 11.04c-.34.34-.67.67-.68 1-.03.32.31.65.63.96.48.5.95.95.93 1.44-.02.49-.53 1-1.04 1.5l-4.13 4.14L19 18.66l4.25-4.24-.96-.96-1.42 1.41-3.75-3.75 3.84-3.83c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41zM7 21.25l9.56-9.57 3.75 3.75L10.75 25H7v-3.75z"
                fill="#fff"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_1_368"
                    x1={5.05263}
                    y1={-1.73696e-7}
                    x2={22.3158}
                    y2={32}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F8C96B" />
                    <Stop offset={0.95} stopColor="#FA9263" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default AskIcon
