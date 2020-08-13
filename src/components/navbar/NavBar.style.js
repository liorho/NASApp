import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  active: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  inActive: {
    fontSize: '0.9rem',
    color: '#ffd5cd',
  },
  navbar: {
    backgroundColor: '#3c2c3e',
  },
  img: {
    marginLeft: "auto"
  }
}));

export default useStyles