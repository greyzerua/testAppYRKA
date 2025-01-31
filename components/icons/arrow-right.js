import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowRight(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={6}
            height={11}
            viewBox="0 0 6 11"
            fill="none"
            className={props}
            {...props}
        >
            <Path
                d="M6 6a.576.576 0 01-.043.221.603.603 0 01-.129.185L.963 11.167a.543.543 0 01-.399.166.537.537 0 01-.282-.073.535.535 0 01-.202-.203.558.558 0 01.086-.682L4.632 6 .166 1.625A.558.558 0 01.282.74.537.537 0 01.564.667c.156 0 .289.053.4.16l4.864 4.767A.582.582 0 016 6z"
                fill="#CBCBD7"
            />
        </Svg>
    )
}

export default ArrowRight

