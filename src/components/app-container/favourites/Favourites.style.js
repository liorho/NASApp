import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    fontFamily: "'Red Rose', cursive",
    fontWeight: 'bold',
    fontSize: '2em',
    marginBottom: '8px',
  },
  explanation: {
    fontFamily: "'Montserrat', sans-serif",
  },
  root: {
    borderRadius: 0,
    boxShadow: 'none',
    // opacity: '0'
  },
}));

export default useStyles;
