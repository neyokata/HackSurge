// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HackSurge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HackSurge/i);
    expect(titleElement).toBeInTheDocument();
});
