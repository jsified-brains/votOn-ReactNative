import React from 'react';
import AppRoot from './AppRoot';

import renderer from 'react-test-renderer';

describe('AppRoot Component.', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<AppRoot />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
