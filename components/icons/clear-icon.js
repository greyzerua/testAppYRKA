import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function ClearIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Circle cx={12} cy={12} r={10} fill="#4F4F59" />
            <Path
                d="M15 15L9 9m6 0l-6 6"
                stroke="#ECEFF1"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ClearIcon
