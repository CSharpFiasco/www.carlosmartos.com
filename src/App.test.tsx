import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

const MockIntersectionObserver = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));
vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

describe('App', () => {
  it('renders without crashing', () => {
    const app = render(<App />);
    expect(app).toBeTruthy();
  });
});
