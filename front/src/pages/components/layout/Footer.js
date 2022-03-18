import { makeStyles } from "@mui/styles";
import React from "react";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  test: {
    borderWidth: '5px',
    fontSize: '40px'
  }
})
const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.test}>
      test
    </footer>
  );
};

export default Footer;
