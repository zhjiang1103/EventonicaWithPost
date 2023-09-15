import { describe, expect, test } from 'vitest';
import Events from './components/events';

test("Techtonica 2023 H2 events", () => {

    const { getByText } = render(<Header />);
    expect(getByText("Techtonica 2023 H2 events")).toBeDefined();

});