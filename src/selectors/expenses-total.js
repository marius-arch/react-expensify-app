export default (expenses) =>
    expenses.reduce((count, { amount }) => count + amount, 0);
