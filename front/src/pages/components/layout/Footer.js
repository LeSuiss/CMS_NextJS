import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
  test: {
    borderWidth: '5px',
    fontSize: '40px',
  },
});
function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.test}>
      test
    </footer>
  );
}

export default Footer;
