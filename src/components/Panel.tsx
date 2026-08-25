import { COLOR_BG, COLOR_FG, SPACING_SM, SPACING_MD, RADIUS_MD, FONT_MONO, FONT_SIZE_MD } from "../tokens";

export const Panel = ({ title, children }: { title: string; children?: any }) => (
    <div
        className="smoke-panel"
        style={{
            background: COLOR_BG,
            color: COLOR_FG,
            padding: SPACING_MD,
            borderRadius: RADIUS_MD,
            fontFamily: FONT_MONO,
            fontSize: FONT_SIZE_MD,
        }}
    >
        <h3 style={{
            margin: `0 0 ${SPACING_SM} 0`,
            fontSize: FONT_SIZE_MD,
            opacity: "0.7",
        }}>{title}</h3>

        {children}
    </div>
);
