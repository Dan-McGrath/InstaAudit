export const formatToDollars = (number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(
    number,
  );
};
