import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Color from "../../config/Color";
import SearchIcon from "@mui/icons-material/Search";

export default function AutoComplete(props) {
  const {
    label,
    name,
    onClick,
    onChange,
    onBlur,
    sx,
    options,
    error = null,
    size,
    disabled,
    open,
    onOpen,
    onClose,
    loading,
    isOptionEqualToValue,
    getOptionLabel,
    isArrow,
    isSearchIcon,
    filterOptions,
    onInputChange,
    renderOption,
    defaultValue,
    value,
  } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <Autocomplete
      freeSolo={!isArrow}
      disabled={disabled}
      name={name}
      size={size}
      sx={sx}
      open={open}
      onClick={onClick}
      onBlur={onBlur}
      onOpen={onOpen}
      onClose={onClose}
      filterOptions={filterOptions}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={getOptionLabel}
      options={options}
      loading={loading}
      onChange={onChange}
      onInputChange={onInputChange}
      renderOption={renderOption}
      value={value}
      defaultValue={defaultValue}
      renderInput={(params) => (
        <TextField
          {...params}
          {...(error && { error: true, helperText: error })}
          label={label}
          color="warning"
          InputProps={{
            ...params.InputProps,

            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : isSearchIcon ? (
                  <InputAdornment position="end">
                    <IconButton variant="text">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ) : (
                  <></>
                )}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
