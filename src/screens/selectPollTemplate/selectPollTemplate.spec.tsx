import React from 'react';
import SelectPollTemplate from './selectPollTemplate';
import renderer from 'react-test-renderer';

describe('ThirdScreen component.', () => {
  it('matches expected snapshot', () => {
    const header = renderer.create(
      <SelectPollTemplate />
    ).toJSON;
    expect(header).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(<SelectPollTemplate />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
