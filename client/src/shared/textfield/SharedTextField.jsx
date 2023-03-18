import React from "react";
import { TextField } from "@mui/material";

export default function TextInput(props) {
  const {
    id,
    label,
    value,
    style,
    name,
    onClick,
    onChange,
    onBlur,
    sx,
    inputProps,
    error = null,
    size,
    disabled,
    className,
    type,
    autoComplete,
    required,
    rows,
    multiline,
    onInput,
  } = props;

  return (
    <TextField
      required={required}
      id={id}
      type={type}
      className={className}
      disabled={disabled}
      size={size}
      color="warning"
      name={name}
      sx={sx}
      label={label}
      value={value}
      style={style}
      onChange={onChange}
      onBlur={onBlur}
      onClick={onClick}
      onInput={onInput}
      InputProps={inputProps}
      autoComplete={autoComplete}
      multiline={multiline}
      rows={rows}
      {...(error && { error: true, helperText: error })}
    />
  );
}
