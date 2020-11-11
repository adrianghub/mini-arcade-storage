import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Parallax } from "react-parallax";
import { Card, Container, Typography, Grid } from "@material-ui/core";

import banner from "../../images/banner.jpg";

const useStyles = makeStyles((theme) => ({
  heroImage: {
    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    position: "relative",
    height: "500px",
  },
  visualContainer: {
    paddingTop: theme.spacing(3),
  },
  visualTitle: {
    fontWeight: 300,
    paddingBottom: theme.spacing(3),
    opacity: 0.5,
  },
}));

const VisualGrid = () => {
  const classes = useStyles();

  return (
    <>
      <Parallax
        className={classes.heroImage}
        blur={{ min: -15, max: 15 }}
        bgImage={banner}
      />
      <Container maxWidth="xl" className={classes.visualContainer}>
        <Typography variant="h4" className={classes.visualTitle}>All Games</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card></Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card></Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card></Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default VisualGrid;
