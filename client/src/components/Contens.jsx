import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Parallax } from "react-parallax";
import _ from "lodash";
import Color from "../config/Color";

const insideStyles = {
  // background: "white",
  padding: 20,
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: "white",
};
const Contents = () => {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);

  const getData = () => {
    fetch("http://localhost:8080")
      .then((res) => res.json())
      .then((data) => {
        // console.log(" data ", data);
        var x = _.split(data.firstName, "");
        var x2 = _.split(data.lastName, "");
        setFirstName(x);
        setLastName(x2);
        // console.log("x -> ", x);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const image1 =
    "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
  const image2 =
    "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";

  return (
    <>
      <Grid container sx={{ marginTop: "4rem" }}>
        <Grid item xs={12}>
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <div className="waviy">
              {firstName.map((value, index) => (
                <span
                  key={index}
                  style={{
                    "--i": index,
                    paddingRight: ".5rem",
                    color: Color.black,
                  }}
                >
                  {value}
                </span>
              ))}
            </div>
            {/* for desktop */}
            <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
              <div className="shadow">
                {lastName.map((value, index) => (
                  <span key={index} style={{ paddingRight: "0.5rem" }}>
                    {value}
                  </span>
                ))}
              </div>
            </Box>
            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "end",
                alignContent: "end",
                alignItems: "end"
              }}
            >
              <h5>Picture here</h5>
            </Box>
          </Box>
          {/* for mobile */}
          <Box
            sx={{
              display: { xs: "block", sm: "none", md: "nonw" },
              marginTop: "1.2rem",
            }}
          >
            <div className="shadow">
              {lastName.map((value, index) => (
                <span key={index} style={{ paddingRight: "0.5rem" }}>
                  {value}
                </span>
              ))}
            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Contents;
