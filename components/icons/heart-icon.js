import * as React from "react"
import Svg, {
    Rect,
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath
} from "react-native-svg"

function HeartIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            {...props}
        >
            <Rect
                x={0.5}
                y={0.5}
                width={31}
                height={31}
                rx={7.5}
                fill="url(#paint0_linear_1_397)"
            />
            <Rect
                x={0.5}
                y={0.5}
                width={31}
                height={31}
                rx={7.5}
                stroke="url(#paint1_linear_1_397)"
            />
            <G clipPath="url(#clip0_1_397)">
                <Path
                    d="M13.498 9.793c1.42-1.904 3.555-2.46 5.519-1.925 2.12.577 3.984 2.398 4.603 4.934.032.13.06.26.083.39a4.453 4.453 0 00-2.774-.07c-1.287-.952-2.881-1.112-4.298-.59-1.775.655-3.161 2.316-3.482 4.406-.41 2.676 1.22 5.08 3.525 7.124l.388.336c-.313.022-.631-.027-.935-.092a9.425 9.425 0 01-.466-.112l-.537-.15c-4.774-1.343-7.97-3.444-8.887-6.584-.732-2.506-.028-5.015 1.52-6.575 1.434-1.445 3.56-2.031 5.741-1.092zm1.628 7.448c.428-2.792 3.657-4.168 5.315-1.772a.104.104 0 00.144.025c2.377-1.684 4.94.713 4.387 3.483-.32 1.606-1.81 2.94-4.47 4l-.435.17-.263.108c-.227.089-.467.16-.684.122-.216-.038-.417-.188-.6-.348l-.31-.28c-2.313-1.991-3.341-3.827-3.084-5.508z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_1_397"
                    x1={-7.21672e-7}
                    y1={9.33334}
                    x2={32.1806}
                    y2={29.0828}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#448ACA" />
                    <Stop offset={0.95} stopColor="#5C34B1" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_1_397"
                    x1={-7.21672e-7}
                    y1={9.33334}
                    x2={32.1806}
                    y2={29.0828}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#448ACA" />
                    <Stop offset={0.95} stopColor="#5C34B1" />
                </LinearGradient>
                <ClipPath id="clip0_1_397">
                    <Path fill="#fff" transform="translate(4 4)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default HeartIcon
