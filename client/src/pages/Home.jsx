import React, { Suspense, useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  Switch,
} from "@mui/material";
import Color from "../config/Color";
import Brightness2RoundedIcon from "@mui/icons-material/Brightness2Rounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { lazy } from "react";
import Contents from "../components/Contens";
import moment from "moment";

const Home = () => {
  const [themeDark, setThemeDark] = useState(false);
  const [screen, setScreen] = useState(0);

  const ContentsProfile = lazy(() => import("../components/Contens"));

  const handleTheme = () => {
    setThemeDark(!themeDark);
  };

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    setScreen(scrolled);
    // console.log("scrolled ", scrolled);
    // scrolled == 0 ? setTopScreen(true) : setTopScreen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <Container
        sx={{ backgroundColor: themeDark ? Color.black : Color.white }}
      >
        {/* <AppBar
          style={{ backgroundColor: themeDark ? Color.black : Color.white }}
          sx={{ boxShadow: screen == 0 ? "none" : "block" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              flexDirection: "row",
            }}
          >
            <Button onClick={handleTheme}>
              <Brightness2RoundedIcon
                sx={{
                  display: themeDark ? "flex" : "none",
                  color: Color.white,
                }}
              />
              <LightModeRoundedIcon
                sx={{
                  display: !themeDark ? "flex" : "none",
                  color: Color.black,
                }}
              />
            </Button>
          </Box>
        </AppBar> */}
        <Grid container>
          <Grid item xs={12}>
            <Suspense fallback={null}>
              <Contents />
            </Suspense>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              marginLeft: "2rem",
              paddingBottom: "1rem",
              color: themeDark ? Color.white : Color.black,
              bottom: 0,
              position: "fixed",
            }}
          >
            &copy; Copy Right {moment().format("YYYY")}
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
