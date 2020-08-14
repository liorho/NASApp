import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1em',
    padding: '0.5em',
    height: "-webkit-fill-available",
    // backgroundColor: "#f9ecf2"
  },
  header: {
    fontFamily: "'Red Rose', cursive",
    fontWeight: 'bold',
    fontSize: '1em',
    marginBottom: '8px',
  },
  explanation: {
    fontFamily: "'Montserrat', sans-serif",
    marginBottom: "20px"
  },
  homeRoot: {
    borderRadius: 0,
    boxShadow: 'none'
  },
  homeHeader: {
    fontSize: '2em'
  }

}));

export default useStyles;
