import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import _ from 'lang';
const _l = _('en');

import { EXPERTISE_LEVELS } from 'shared';
import Expertise from './index';

configure({ adapter: new Adapter() });

describe('<Expertise />', () => {
  const level = EXPERTISE_LEVELS[0];
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Expertise level={ level }/>);
  });

  it('should render correctly', () => {
    expect(wrapper).toContainMatchingElement('span.expertise');
  });

  it('should render the correct text', () => {
    expect(wrapper.text()).toBe(_l`Expertise${level}`);
  });

  it('should get the appropriate class from expertise level', () => {
    expect(wrapper).toContainMatchingElement(`.expertise.${level}`);
  });

});

