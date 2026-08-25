import type { Signal } from "@n3rdw1z4rd/smoke-ui";
import { Row } from "./Row";
import { COLOR_ACCENT, SPACING_SM } from "../tokens";

export const Slider = ({
    label,
    signal,
    min,
    max,
    step = 1,
}: {
    label: string;
    signal: Signal<number>;
    min: number;
    max: number;
    step?: number;
}) => (
    <Row label={label}>
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={signal}
            onInput={(e: Event) => signal.set(Number((e.target as HTMLInputElement).value))}
            style={{ accentColor: COLOR_ACCENT }}
        />

        <span style={{
            marginLeft: SPACING_SM,
            width: "36px",
            textAlign: "right",
        }}>{signal}</span>
    </Row>
);
