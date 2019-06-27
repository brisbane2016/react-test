import moment from 'moment';
// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const createdAtMoment = expense.createdAt;
      const startDateMatch = startDate?startDate.isSameOrBefore(createdAtMoment,'day'):true;

      const endDateMatch = endDate?endDate.isSameOrAfter(createdAtMoment,'day'):true;

      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
      console.log(expenses );
 
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };
  
  /*
  Using Compare Functions to Sort
Let’s say that a and b are the two elements being compared by the compare function. If the return value of the compare function is:

less than 0 — a comes before b
greater than 0  — b comes before a
equal to 0  — a and b are left unchanged with respect to each other

https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/

  */