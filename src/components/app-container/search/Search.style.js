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
  media: {
    height: '70vh',
    marginBottom: '8px',
  },
  root: {
    borderRadius: 0,
    boxShadow: 'none',
  }
}));

export default useStyles