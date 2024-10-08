import { type UserEvent, userEvent } from "@testing-library/user-event";

export interface MyTestContext {
    user: UserEvent;
}

// eslint-disable-next-line vitest/valid-title -- this isn't a test
export const myTest = test.extend<MyTestContext>({
    // eslint-disable-next-line no-empty-pattern, react-hooks/rules-of-hooks -- this is not React
    user: async ({}, use) => await use(userEvent.setup()),
});
