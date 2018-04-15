import React from 'react';
import HomeScreen from './home';
import renderer from 'react-test-renderer';

describe('Home Component.', () => {
  it('matches expected snapshot', () => {
    const header = renderer.create(
      <HomeScreen />
    ).toJSON;
    expect(header).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(<HomeScreen />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
