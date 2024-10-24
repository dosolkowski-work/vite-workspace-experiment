import { act } from "@testing-library/react";
import { axe } from "vitest-axe";

/**
 * Run axe on some content to check for accessibility violations.
 * @param container An HTML element to inspect for violations.
 */
export async function accessibilityViolationsCheck(container?: HTMLElement) {
    if (container) {
        let axeResult;
        await act(async () => {
            axeResult = await axe(container);
        });
        expect(axeResult).toHaveNoViolations();
    }
}
