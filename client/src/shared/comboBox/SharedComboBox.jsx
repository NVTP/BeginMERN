import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useAuth } from "../../hooks/UseAuth";

export default function ComboBox(props) {
  const {
    name,
    label,
    value,
    error = null,
    onChange,
    options,
    sx,
    size,
    allowEmpty = false,
  } = props;

  const { user } = useAuth();

  return (
    <>
      <FormControl size={size} sx={sx} {...(error && { error: true })}>
        <InputLabel color="warning">{label}</InputLabel>
        <Select
          color="warning"
          name={name}
          value={value || ""}
          label={label}
          onChange={onChange}
        >
          {allowEmpty ? (
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          ) : null}
          {options.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </>
  );
}
