export const getQuarterlyExpenses = expenses => {
    const quarterlyExpenses = {};
    expenses.map(expense => {
      const month = new Date(expense.Date).getMonth();
      const year = new Date(expense.Date).getFullYear();
      const currentYear = new Date().getFullYear();
      if (year === currentYear) {
        if (month <= 2) {
          if (quarterlyExpenses['Q1']) {
            quarterlyExpenses['Q1'] += parseFloat(expense.Amount);
          } else {
            quarterlyExpenses['Q1'] = parseFloat(expense.Amount);
          }
        } else if (month <= 5) {
          if (quarterlyExpenses['Q2']) {
            quarterlyExpenses['Q2'] += parseFloat(expense.Amount);
          } else {
            quarterlyExpenses['Q2'] = parseFloat(expense.Amount);
          }
        } else if (month <= 8) {
          if (quarterlyExpenses['Q3']) {
            quarterlyExpenses['Q3'] += parseFloat(expense.Amount);
          } else {
            quarterlyExpenses['Q3'] = parseFloat(expense.Amount);
          }
        } else {
          if (quarterlyExpenses['Q4']) {
            quarterlyExpenses['Q4'] += parseFloat(expense.Amount);
          } else {
            quarterlyExpenses['Q4'] = parseFloat(expense.Amount);
          }
        }
      }
    });
    return quarterlyExpenses;
  };