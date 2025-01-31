import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SettingIcon(props) {
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
                d="M19.28 12.49l1.252 1.115a1.26 1.26 0 01.271 1.618l-1.509 2.578a1.3 1.3 0 01-.485.473 1.386 1.386 0 01-1.085.109l-1.602-.529a7.61 7.61 0 01-.875.483l-.336 1.624a1.288 1.288 0 01-.47.754c-.244.19-.546.291-.856.285H10.46a1.343 1.343 0 01-.855-.285 1.288 1.288 0 01-.468-.754l-.338-1.624a8.319 8.319 0 01-.868-.484l-1.608.53a1.387 1.387 0 01-1.084-.11 1.301 1.301 0 01-.484-.47l-1.564-2.58a1.26 1.26 0 01.272-1.643L4.713 12v-.49l-1.252-1.115a1.26 1.26 0 01-.27-1.618l1.562-2.578c.117-.198.285-.36.485-.472.202-.112.43-.172.66-.174.143-.009.286.005.424.04l1.576.553c.281-.18.573-.341.875-.483l.338-1.624c.061-.299.227-.566.468-.753.243-.191.546-.292.855-.286h3.099c.31-.006.612.095.856.286.242.19.408.456.468.753l.337 1.624c.3.143.59.304.868.484l1.61-.528a1.357 1.357 0 011.085.108c.2.113.367.276.484.47l1.562 2.58a1.26 1.26 0 01-.252 1.643l-1.27 1.083v.987z"
                stroke="#fff"
                strokeWidth={1.5}
            />
            <Path
                d="M15.461 12a3.462 3.462 0 11-6.923 0 3.462 3.462 0 016.923 0z"
                stroke="#fff"
                strokeWidth={1.5}
            />
        </Svg>
    )
}

export default SettingIcon