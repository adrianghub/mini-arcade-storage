import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from './components/Grid/Grid';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    backgroundColor: "#282C8C",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid />
    </div>
  );
}

export default App;
