import { SPACING_SM } from "../tokens";

export const Row = ({ label, children }: { label: string; children?: any }) => (
    <div
        className="smoke-row"
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: SPACING_SM,
        }}
    >
        <span>{label}</span>

        {children}
    </div>
);
