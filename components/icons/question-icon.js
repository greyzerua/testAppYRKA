import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function QuestionIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            {...props}
        >
            <Rect width={32} height={32} rx={8} fill="url(#paint0_linear_1_375)" />
            <Path
                d="M16 6c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 01-4.644-1.142l-4.29 1.117a.85.85 0 01-1.037-1.036l1.116-4.289A9.96 9.96 0 016 16c0-5.523 4.477-10 10-10zm0 13.5a1 1 0 100 2 1 1 0 000-2zm0-8.75a2.75 2.75 0 00-2.75 2.75.75.75 0 001.493.102l.014-.23a1.25 1.25 0 012.493.128c0 .539-.135.805-.645 1.332l-.304.31c-.754.784-1.051 1.347-1.051 2.358a.75.75 0 101.5 0c0-.539.135-.805.645-1.332l.304-.31c.754-.784 1.051-1.347 1.051-2.358A2.75 2.75 0 0016 10.75z"
                fill="#fff"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_1_375"
                    x1={5.05263}
                    y1={-1.73696e-7}
                    x2={22.3158}
                    y2={32}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#69D2FC" />
                    <Stop offset={0.95} stopColor="#5A54F4" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default QuestionIcon
