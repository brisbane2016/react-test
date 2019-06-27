import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>


        {
            props.expenses.map((expense)=>{
                /*
                //it is also correct
                return <ExpenseListItem 
                discription={expense.description} 
                key={expense.id} 
                
                
                />;
                */

                return <ExpenseListItem key={expense.id} {...expense}  />;
            }
            )
            
            
        }
    </div>


);

const mapStateToProps = (state) => {
    return {
        expenses:selectExpenses(state.expenses,state.filters)
    }
};


export default connect(mapStateToProps)(ExpenseList);