import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ExploreTabIcon({color, props}) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                d="M10 19a9 9 0 100-18 9 9 0 000 18z"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M9.307 7.739L13 7l-.739 3.693a2 2 0 01-1.568 1.569L7 13l.739-3.693a2 2 0 011.568-1.568z"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ExploreTabIcon
