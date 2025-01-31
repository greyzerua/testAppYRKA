import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NavigationBarIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.454 6.002H4.1a.75.75 0 010-1.5h9.354a2.75 2.75 0 015.293 0H20.1a.75.75 0 110 1.5h-1.354a2.75 2.75 0 01-5.292 0zm1.396-.75a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm-4.103 7.75H20.1a.75.75 0 100-1.5h-9.353a2.75 2.75 0 00-5.293 0H4.1a.75.75 0 100 1.5h1.354a2.751 2.751 0 005.292 0m-3.896-.75a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM13.254 19.5H3.9a.75.75 0 110-1.5h9.354a2.75 2.75 0 015.293 0H19.9a.75.75 0 010 1.5h-1.354a2.75 2.75 0 01-5.292 0zm1.762-1.634a1.25 1.25 0 101.768 1.768 1.25 1.25 0 00-1.768-1.768z"
                fill="#fff"
            />
        </Svg>
    )
}

export default NavigationBarIcon
