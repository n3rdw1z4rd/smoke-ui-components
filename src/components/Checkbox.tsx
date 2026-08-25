import type { Signal } from "@n3rdw1z4rd/smoke-ui";
import { Row } from "./Row";
import { COLOR_ACCENT } from "../tokens";

export const Checkbox = ({ label, signal }: { label: string; signal: Signal<boolean> }) => (
    <Row label={label}>
        <input
            type="checkbox"
            checked={signal}
            onChange={(e: Event) => signal.set((e.target as HTMLInputElement).checked)}
            style={{ accentColor: COLOR_ACCENT }}
        />
    </Row>
);
