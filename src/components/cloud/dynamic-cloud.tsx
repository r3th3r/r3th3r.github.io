import React from "react";
import { Cloud, fetchSimpleIcons, ICloud, renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 40
        }
    },
    // https://www.goat1000.com/tagcanvas-options.php
    options: {
        clickToFront: 500,
        depth: 1,
        imageScale: 2,
        initial: [0.1, -0.1],
        outlineColour: "#0000",
        reverse: true,
        tooltip: "native",
        tooltipDelay: 0,
        wheelZoom: false
    }
};

export type DynamicCloudProps = {
    iconSlugs: string[];
};

export const renderCustomIcon = (icon: SimpleIcon, bg: string) => {
    return renderSimpleIcon({
        icon,
        minContrastRatio: 2,
        bgHex: bg,
        size: 42,
        fallbackHex: bg,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e: any) => e.preventDefault()
        }
    });
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export const DynamicCloud = (props: DynamicCloudProps) => {
    const [data, setData] = React.useState<IconData>();
    React.useEffect(() => {
        fetchSimpleIcons({ slugs: props.iconSlugs }).then(setData);
    }, [props.iconSlugs]);
    const renderedIcons = React.useMemo(() => {
        if (!data) {
            return null;
        }

        const icons = [];
        for (const k of Object.keys(data.simpleIcons)) {
            icons.push(data.simpleIcons[k]);
        }

        return icons.map((i) => renderCustomIcon(i, "#000"));
    }, [data, "#000"]);

    // @ts-ignore
    return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
};
