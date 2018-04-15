import React from 'react';
import AppRoot from './AppRoot';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<AppRoot />).toJSON();
  expect(rendered).toBeTruthy();
});
