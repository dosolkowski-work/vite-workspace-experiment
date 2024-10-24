import "@testing-library/jest-dom/vitest"; // This adds jest-dom assertions such as .toBeVisible()
import * as matchers from "vitest-axe/matchers";

// Add vitest-axe toHaveNoViolations() assertion
expect.extend(matchers);

// Another broken piece we need to mock; vitest-canvas-mock doesn't do the trick.
HTMLCanvasElement.prototype.getContext = () => null;

// Note that additional global test behavior can be configured here, e.g. run some check after every test
