import React from 'react'
import {shallow} from 'enzyme';
import {ADDExpensePage} from '../../components/ADDExpensePage'
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper;
beforeEach( () => {
    startAddExpense= jest.fn();
    history = { push: jest.fn() };
    wrapper =  shallow(<ADDExpensePage startAddExpense={startAddExpense} history = {history}/>);
})

test ('should render ADDExpensePage correctly',() => {
    expect(wrapper).toMatchSnapshot();
})

test ('should handle onsubmit',() => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
})