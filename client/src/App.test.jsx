import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from "./App";

test("Techtonica 2023 H2 events", () => {

    const { getByText } = render(<App />);
    expect(getByText("Techtonica 2023 H2 events")).toBeDefined();

});