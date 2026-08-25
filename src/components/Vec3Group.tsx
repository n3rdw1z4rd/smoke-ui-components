import type { Signal } from "@n3rdw1z4rd/smoke-ui";
import { Slider } from "./Slider";
import { COLOR_FG_MUTED, SPACING_XS, SPACING_MD } from "../tokens";

export const Vec3Group = ({
    title,
    x, y, z,
    min, max, step,
}: {
    title: string;
    x: Signal<number>;
    y: Signal<number>;
    z: Signal<number>;
    min: number;
    max: number;
    step?: number;
}) => (
    <div style={{ marginBottom: SPACING_MD }}>
        <div style={{
            color: COLOR_FG_MUTED,
            marginBottom: SPACING_XS,
        }}>{title}</div>

        <Slider label="x" signal={x} min={min} max={max} step={step} />
        <Slider label="y" signal={y} min={min} max={max} step={step} />
        <Slider label="z" signal={z} min={min} max={max} step={step} />
    </div>
);
