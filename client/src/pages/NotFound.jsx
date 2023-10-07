import React from "react";
import { Container, Grid, IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Color from "../config/Color";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/", true);
  };
  return (
    <>
      <Container maxWidth={false} disableGutters>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignContent="center"
          style={{
            minHeight: "100vh",
            backgroundColor: Color.black,
            paddingLeft: 0,
          }}
        >
          <Grid item xs={12}>
            <h1 className="Notfound">Not Found</h1>
            <Stack
              spacing={0}
              direction="row"
              // justifyContent="center"
              // justifyItems="center"
            >
              <IconButton onClick={handleBack}>
                <ArrowBackIcon
                  className="Notfound"
                  style={{ fontSize: "2rem" }}
                />
              </IconButton>
              <h2 className="Notfound">Go Back</h2>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default NotFound;
