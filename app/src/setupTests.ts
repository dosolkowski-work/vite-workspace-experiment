import "@testing-library/jest-dom/vitest"; // This adds jest-dom assertions such as .toBeVisible()
import * as matchers from "vitest-axe/matchers";
import { act } from "@testing-library/react";
import { axe } from "vitest-axe";

// Add vitest-axe toHaveNoViolations() assertion
expect.extend(matchers);

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

// Another broken piece we need to mock; vitest-canvas-mock doesn't do the trick.
HTMLCanvasElement.prototype.getContext = () => null;

// Note that additional global test behavior can be configured here, e.g. run some check after every test
