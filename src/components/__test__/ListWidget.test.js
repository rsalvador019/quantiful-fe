import { render, screen } from '@testing-library/react';
import ListWidget from '../widgets/ListWidget';

test('should render labels based from the given config', () => {
  const mockListWidgetConfig = {
    title: 'Mock title',
    subtitle: 'Mock sub title',
    type: 'list',
    api: 'https:/dummy.co/api/v2/pokemon-color/'
  };

  render(<ListWidget widget={mockListWidgetConfig} />);
  expect(screen.getByText(/Mock title/i)).toBeInTheDocument();
  expect(screen.getByText(/Mock sub title/i)).toBeInTheDocument();
});
