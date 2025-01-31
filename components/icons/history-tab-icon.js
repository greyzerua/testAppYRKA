import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HistoryTabIcon({color,props}) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={20}
            viewBox="0 0 22 20"
            fill="none"
            {...props}
        >
            <Path
                d="M5.636 16.364A9 9 0 103 10.004V12"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M1 10l2 2 2-2m6-4v5h5"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default HistoryTabIcon
