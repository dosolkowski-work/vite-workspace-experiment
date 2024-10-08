import "@testing-library/jest-dom/vitest"; // This adds jest-dom assertions such as .toBeVisible()
import "vitest-axe/extend-expect"; // Adds TypeScript hints/IntelliSense
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

// Clunky TypeScript workaround seems to be necessary now for expect extends to work.
// See https://vitest.dev/guide/extending-matchers.html for docs, but they weren't very helpful.
declare module "vitest" {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any -- have to match interface we're altering
    interface Assertion<T = any> {
        toHaveNoViolations: () => void;
    }
}

// Note that additional global test behavior can be configured here, e.g. run some check after every test
