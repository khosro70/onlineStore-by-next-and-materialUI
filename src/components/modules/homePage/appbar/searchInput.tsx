import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#F3F6F9",
    border: "none",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&.Mui-focused": {
      border: "none",
      outline: "none",
      backgroundColor: "#F3F6F9",
    },
    "&.Mui-hover": {
      border: "none",
      outline: "none",
      backgroundColor: "#F3F6F9",
    },
  },
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#F3F6F9",
    border: "none",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      border: "none",
      outline: "none",
      backgroundColor: "#F3F6F9",
    },
  },
}));

const SearchInput: React.FC = () => {
  return (
    <BootstrapInput
      placeholder="جست و جوی محصول و ..."
      id="bootstrap-input"
      size="small"
    />
  );
};

export default SearchInput;
