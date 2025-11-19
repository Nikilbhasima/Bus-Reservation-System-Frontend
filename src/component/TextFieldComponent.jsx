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
      variant="outlined"
      fullWidth={fullWidth}
      InputProps={{
        sx: {
          "& .MuiInputBase-input": {
            fontSize: "16px",

            paddingTop: "12px",
            paddingBottom: "12px",
            paddingLeft: "25px",
            paddingRight: "16px",
          },
          "&.MuiOutlinedInput-root": {
            borderRadius: "10px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "10px",
          },
        },
      }}
      InputLabelProps={{
        sx: { fontSize: "14px" },
      }}
      FormHelperTextProps={{
        sx: { fontSize: "10px", padding: 0 },
      }}
      {...props}
    />
  );
}

export default TextFieldComponent;
