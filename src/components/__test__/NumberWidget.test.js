import { render, screen } from '@testing-library/react';
import NumberWidget from '../widgets/NumberWidget';

test('should render labels based from the given config', () => {
  const mockNumberWidgetConfig = {
    title: 'Mock count title',
    type: 'number',
    api: 'https://pokeapi.co/api/v2/gender/3/'
  };

  render(<NumberWidget widget={mockNumberWidgetConfig} />);
  expect(screen.getByText(/Mock count title/i)).toBeInTheDocument();
});
