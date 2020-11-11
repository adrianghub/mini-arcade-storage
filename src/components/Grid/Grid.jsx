import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Parallax } from "react-parallax";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Grid,
} from "@material-ui/core";

import banner from "../../images/banner.jpg";
import soonCard from "../../images/soon.png";

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
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
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
        <Typography align="left" variant="h4" className={classes.visualTitle}>
          All Games
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media} image={soonCard} />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Up-stairs
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    align="left"
                  >
                    Jump towards the appearing stairs to increase your final
                    score.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media} image={soonCard} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Tetris Arcade
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    align="left"
                  >
                    Jump towards the appearing stairs to increase your final
                    score.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media} image={soonCard} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Poop-sweeper
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    align="left"
                  >
                    Jump towards the appearing stairs to increase your final
                    score.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default VisualGrid;
