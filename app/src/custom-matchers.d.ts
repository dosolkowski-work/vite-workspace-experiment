import "vitest";
import type { AxeMatchers } from "vitest-axe";

declare module "vitest" {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-object-type -- have to match interface we're altering
    interface Assertion<T = any> extends AxeMatchers {}
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface AsymmetricMatchersContaining extends AxeMatchers {}
}
