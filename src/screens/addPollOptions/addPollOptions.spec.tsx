import React from 'react';
import {AddPollOptions} from './addPollOptions';
import renderer from 'react-test-renderer';

describe('SecondScreen component.', () => {
  it('matches expected snapshot', () => {
    const header = renderer.create(
      <AddPollOptions />
    ).toJSON;
    expect(header).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(<AddPollOptions />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
