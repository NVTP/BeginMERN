import React from "react";
import { Typography } from "@mui/material";

export default function TextTypography(props) {
  const { text, style, variant } = props;

  return (
    <Typography style={style} variant={variant}>
      {text}
    </Typography>
  );
}
