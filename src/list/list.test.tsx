import React from 'react';

import '@testing-library/jest-dom/jest-globals';
import {describe, expect, test} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import List from './list';

test('Loads list display one list item', async () => {
    // ARRANGE
    render(<List />);
  
    // ACT
    // await userEvent.click(screen.getByText('Load Greeting'))
    // await screen.findByRole('heading')
  
    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('hello there')
    expect(screen.getByRole('button')).toBeDisabled()
  })