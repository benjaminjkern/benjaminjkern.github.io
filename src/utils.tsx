import { splitProps } from "solid-js";

import { styled } from "solid-styled-components";

export const DynamicStyleComponent = (_props: {
    elementName: string;
    dynamicStyle: Object;
    [x: string]: any;
}) => {
    const [props, rest] = splitProps(_props, ["elementName", "dynamicStyle"]);
    return (
        <>
            {(() => {
                // @ts-ignore
                const StyledComponent = styled(props.elementName)(
                    // @ts-ignore
                    props.dynamicStyle instanceof Function
                        ? props.dynamicStyle
                        : () => props.dynamicStyle
                );
                return <StyledComponent {...rest} />;
            })()}
        </>
    );
};
