import React from 'react';
import ThirdScreen from './thirdScreen';
import renderer from 'react-test-renderer';

describe('ThirdScreen component.', () => {
  it('matches expected snapshot', () => {
    const header = renderer.create(
      <ThirdScreen />
    ).toJSON;
    expect(header).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(<ThirdScreen />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
