import React from 'react';
import {AddPollOptions} from './addPollOptions';
import renderer from 'react-test-renderer';
import { pollTemplateType } from '../../interfacesAndTypes';

const testTemplate: pollTemplateType = {
  id: 1,
  icon: 'meeting',
  templateText: 'sometext'
}
describe('SecondScreen component.', () => {
  it('matches expected snapshot', () => {
    const addPollOptions = renderer.create(
      <AddPollOptions pollTemplate={testTemplate} />
    ).toJSON;
    expect(addPollOptions).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(<AddPollOptions pollTemplate={testTemplate}/>).toJSON();
    expect(rendered).toBeTruthy();
  });
});
