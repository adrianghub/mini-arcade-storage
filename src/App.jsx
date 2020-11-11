import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import VisualGrid from './components/Grid/Grid';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    backgroundColor: "#282C8C",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    paddingBottom: "3rem"
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <VisualGrid />
    </div>
  );
}

export default App;
