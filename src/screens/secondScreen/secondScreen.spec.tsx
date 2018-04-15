import React from 'react';
import SecondScreen from './secondScreen';
import renderer from 'react-test-renderer';

describe('SecondScreen component.', () => {
  it('matches expected snapshot', () => {
    const header = renderer.create(
      <SecondScreen />
    ).toJSON;
    expect(header).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(<SecondScreen />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
