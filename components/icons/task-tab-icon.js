import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TaskTabIcon({color, props}) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={20}
            viewBox="0 0 18 20"
            fill="none"
            {...props}
        >
            <Path
                d="M5.398 13.6h3.6m-3.6-4.5h7.2M4.95 2.35c-1.4.042-2.235.198-2.813.776-.79.792-.79 2.065-.79 4.613v5.856c0 2.548 0 3.822.79 4.614.79.791 2.064.791 4.61.791h4.5c2.545 0 3.818 0 4.608-.792.792-.791.792-2.065.792-4.613V7.739c0-2.547 0-3.821-.792-4.613-.577-.578-1.412-.734-2.813-.776"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M4.946 2.575c0-.87.706-1.575 1.575-1.575h4.95a1.575 1.575 0 010 3.15h-4.95a1.575 1.575 0 01-1.575-1.575z"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default TaskTabIcon
