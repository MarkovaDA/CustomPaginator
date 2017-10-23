export const doIncrement = (maxPageNumber) => {
  return {
    type: 'INCREMENT',
    limit: maxPageNumber
  }
};
export const doDecrement = () => {
  return {
    type: 'DECREMENT'
  }
};