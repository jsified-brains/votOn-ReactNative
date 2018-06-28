import React from 'react';
import {AddPollOptions} from './addPollOptions';
import renderer from 'react-test-renderer';

describe('SecondScreen component.', () => {
  it('matches expected snapshot', () => {
    const addPollOptions = renderer.create(
      <AddPollOptions />
    ).toJSON;
    expect(addPollOptions).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(<AddPollOptions />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
