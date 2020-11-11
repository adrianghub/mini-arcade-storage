import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Parallax } from "react-parallax"

import banner from '../../images/banner.jpg'

const useStyles = makeStyles(theme => ({
  heroImage: {
  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
  width: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  position: "relative",
  height: "500px",
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 300,
    paddingBottom: theme.spacing(3),
    opacity: 0.5,
  },
}));

const Grid = () => {
  const classes = useStyles();
  // eslint-disable-next-line

  return (
    <>
      <Parallax 
      className={classes.heroImage}
      blur={{ min: -15, max: 15 }}
      bgImage={banner}
      />
      <h1>Hello World</h1>
    </>
  );
};

export default Grid;