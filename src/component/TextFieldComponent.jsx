import { TextField } from "@mui/material";
import React from "react";

function TextFieldComponent({
  id,
  label,
  name,
  value,
  onChange,
  error = false,
  helperText = "",
  type = "text",
  fullWidth = true,
  ...props
}) {
  return (
    <TextField
      id={id}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      type={type}
      inputProps={props}
      variant="outlined"
      fullWidth={fullWidth}
      InputProps={{
        sx: {
          "& .MuiInputBase-input": {
            fontSize: "16px", // input text font size
            padding: "12px 16px", // py-12px px-32px
          },
        },
      }}
      InputLabelProps={{
        sx: { fontSize: "14px" }, // label font size
      }}
      FormHelperTextProps={{
        sx: { fontSize: "10px", padding: "0" }, // error/helper text font size
      }}
      {...props}
    />
  );
}

export default TextFieldComponent;
