import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import NotFoundPage from '../../components/NotFoundPage';


test('should render ExpenseListItem correctly',() =>{

    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
}) ;

