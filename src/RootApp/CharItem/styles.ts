export default () => ({
  root: {
    width: '200px',
    height: '380px',
    backgroundColor: '#232222',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, .25)',
    padding: '15px',
    transition: '0.3s transform',
    position: 'relative',
  },
  charName: {
    fontWeight: 'bold',
    fontSize: '22px',
    lineHeight: '29px',
    textTransform: 'uppercase',
    color: '#fff',
  },
  wrap: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 10,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
