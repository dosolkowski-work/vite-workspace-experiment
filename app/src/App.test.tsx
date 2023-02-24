import { render, screen } from "@testing-library/react";
import App from "App";

let component: HTMLElement | undefined;

function renderComponent() {
    component = render(<App />).container;
}

describe("The application", () => {
    it("displays text from multiple sources", () => {
        renderComponent();

        expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeVisible();
    });
});