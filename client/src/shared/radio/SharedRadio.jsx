import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButton(props) {
  const { name, label, value, onChange, options, sx } = props;

  return (
    <>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <RadioGroup
          row
          name={name}
          onChange={onChange}
          value={value}
          sx={sx}
        >
          {options.map((item) => (
            <FormControlLabel
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              control={<Radio  color="warning" />}
              label={item.text}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
}
