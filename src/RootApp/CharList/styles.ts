export default () => ({
  root: {
    marginTop: '50px',
    display: 'grid',
    gridTemplateColumns: '650px 425px',
    columnGap: '25px',
    alignItems: 'start',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 200px)',
    columnGap: '25px',
    rowGap: '30px',
  },
});
