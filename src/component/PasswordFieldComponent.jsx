import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  FormHelperText,
} from "@mui/material";

const formControlStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    fontSize: "16px",
    "& input": {
      padding: "12px 16px",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "10px", // <-- IMPORTANT
    borderColor: "rgba(0,0,0,0.3)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#078DD7",
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#078DD7",
    borderWidth: "2px",
  },
  "& .MuiInputLabel-root": {
    fontSize: "14px",
    color: "gray",
  },
  "& .Mui-focused .MuiInputLabel-root": {
    color: "black",
  },
};

const iconColor = { color: "#078DD7" };

function PasswordFieldComponent({
  label,
  value,
  onChange,
  name,
  visible,
  toggleVisible,
  error = false,
  helperText = "",
}) {
  return (
    <FormControl
      variant="outlined"
      fullWidth
      sx={formControlStyle}
      error={error}
    >
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        type={visible ? "text" : "password"}
        value={value}
        onChange={onChange}
        name={name}
        label={label}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={toggleVisible} edge="end">
              {visible ? (
                <VisibilityOff sx={iconColor} />
              ) : (
                <Visibility sx={iconColor} />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
      {helperText && (
        <FormHelperText sx={{ fontSize: "10px", margin: 0 }}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default PasswordFieldComponent;
