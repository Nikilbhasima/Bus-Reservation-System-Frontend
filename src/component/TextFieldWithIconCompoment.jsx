import { TextField, InputAdornment } from "@mui/material";
import React from "react";

function TextFieldWithIconComponent({
  id,
  label,
  name,
  value,
  onChange,
  error = false,
  helperText = "",
  type = "text",
  fullWidth = true,
  startIcon, // pass the icon here
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
        startAdornment: startIcon ? (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ) : null,
        sx: {
          "& .MuiInputBase-input": {
            fontSize: "16px",
            paddingTop: "12px",
            paddingBottom: "12px",
            paddingLeft: "35px",
          },
        },
      }}
      InputLabelProps={{
        sx: {
          fontSize: "14px",
          paddingLeft: "20px",
          "&.MuiInputLabel-shrink": {
            paddingLeft: "0px", // remove padding when floating
          },
        },
      }}
      FormHelperTextProps={{
        sx: { fontSize: "10px", padding: "0" },
      }}
      {...props}
    />
  );
}

export default TextFieldWithIconComponent;
