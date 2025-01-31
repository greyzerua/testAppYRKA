import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchIcon(props) {
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
                d="M19 19l-4.343-4.343m0 0A8 8 0 103.343 3.343a8 8 0 0011.314 11.314z"
                stroke="#93939F"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SearchIcon
