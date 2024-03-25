// <reference types="@testing-library/jest-dom" />
import { render, screen, waitFor } from '@testing-library/react';
import Home from '@/app/(home)/page';

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Home />);
  
  // ACT & ASSERT
  await waitFor(() => {
    const elem = screen.queryByText(/Framer/); // Using regex to match "Framer" in the text
    expect(elem).toBeInTheDocument(); // Check if element is in the document
  });
});
