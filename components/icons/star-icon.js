import * as React from "react"
import Svg, { G, Path, Defs, RadialGradient, Stop } from "react-native-svg"

function StarIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            {...props}
        >
            <G filter="url(#filter0_iii_869_40)">
                <Path
                    d="M10.616 1.037l1.35 2.911a1.77 1.77 0 001.345 1.009l3.174.489c1.436.218 2.015 1.98 1.012 3.02l-2.418 2.492a1.784 1.784 0 00-.479 1.536l.556 3.424c.24 1.474-1.32 2.577-2.625 1.855L9.866 16.29a1.76 1.76 0 00-1.73 0l-2.663 1.483c-1.306.721-2.865-.382-2.626-1.856l.556-3.424a1.784 1.784 0 00-.48-1.536L.508 8.466C-.505 7.417.082 5.664 1.52 5.446l3.174-.49a1.8 1.8 0 001.343-1.009l1.352-2.911c.64-1.381 2.587-1.381 3.227 0"
                    fill="url(#paint0_radial_869_40)"
                />
                <Path
                    d="M10.616 1.037l1.35 2.911a1.77 1.77 0 001.345 1.009l3.174.489c1.436.218 2.015 1.98 1.012 3.02l-2.418 2.492a1.784 1.784 0 00-.479 1.536l.556 3.424c.24 1.474-1.32 2.577-2.625 1.855L9.866 16.29a1.76 1.76 0 00-1.73 0l-2.663 1.483c-1.306.721-2.865-.382-2.626-1.856l.556-3.424a1.784 1.784 0 00-.48-1.536L.508 8.466C-.505 7.417.082 5.664 1.52 5.446l3.174-.49a1.8 1.8 0 001.343-1.009l1.352-2.911c.64-1.381 2.587-1.381 3.227 0"
                    fill="url(#paint1_radial_869_40)"
                />
            </G>
            <Defs>
                <RadialGradient
                    id="paint0_radial_869_40"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-8.77413 9.43845 -9.33987 -8.68248 14.481 4.498)"
                >
                    <Stop stopColor="#FAC632" />
                    <Stop offset={1} stopColor="#F7C632" />
                </RadialGradient>
                <RadialGradient
                    id="paint1_radial_869_40"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0 9 -9.00001 0 9 9)"
                >
                    <Stop stopColor="#DDBA38" />
                    <Stop offset={1} stopColor="#DDBA38" stopOpacity={0} />
                </RadialGradient>
            </Defs>
        </Svg>
    )
}

export default StarIcon
