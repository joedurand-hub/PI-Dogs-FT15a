import React from 'react';
import { NavLink } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Nav from './Nav';
configure({ adapter: new Adapter() });

describe('<Nav />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Nav />)
  })

  it('Should render Two <NavLink />', () => {
    expect(wrapper.find(NavLink)).toHaveLength(2);
  });
  it('The Link should change the path to "/home".', () => {
    expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/home');
  });
  it('The Link should change the path to "/create"', () => {
    expect(wrapper.find(NavLink).at(1).prop('to')).toEqual('/create');
  });
})