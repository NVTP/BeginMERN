import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

export default function DateSelect(props) {
  const {
    label,
    value,
    name,
    onChange,
    sx,
    error = null,
    size,
    disabled,
    minDate,
    maxDate,
    shouldDisableDate,
  } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <DatePicker
      disableMaskedInput
      minDate={minDate}
      maxDate={maxDate}
      disabled={disabled}
      shouldDisableDate={shouldDisableDate}
      name={name}
      label={label}
      value={value}
      //date 106 format
      inputFormat="DD/MM/yyyy"
      onChange={(date) => onChange(convertToDefEventPara(name, date))}
      renderInput={(params) => (
        <TextField
          {...(error && { error: true, helperText: error })}
          color="warning"
          sx={{
            marginBottom: "3%",
            ...sx,
            backgroundColor: "white",
            width: "100%",
          }}
          size={size}
          {...params}
          inputProps={{
            ...params.inputProps,
            readOnly: true,
          }}
        />
      )}
      defaultValue={null}
    />
  );
}
