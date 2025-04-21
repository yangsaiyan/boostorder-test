import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  Select,
  styled,
  Typography,
} from "@mui/material";

export const SettingWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100%",
});

export const SettingHeaderWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  width: "100%",
  height: "fit-content",
  padding: "8px 16px 8px 16px",
  borderBottom: "1px solid #E0E0E0",
  backgroundColor: "#FFFFFF",
});

export const SettingHeaderContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  width: "100%",
  height: "fit-content",
  gap: "8px",
});

export const StyledHeaderText = styled(Typography)({
  fontFamily: "Montserrat",
  fontSize: "18px",
  fontWeight: 600,
  lineHeight: "20px",
  letterSpacing: "0px",
  textTransform: "capitalize",
  color: "#0A0A0A",
});

export const StyledSaveButton = styled(Button)({
  backgroundColor: "#007AFF",
  width: "100%",
  height: "100%",
  maxWidth: "82px",
  maxHeight: "32px",
  textTransform: "none",
  borderRadius: "32px",
  color: "#FFFFFF",
});

export const CompanyDetailsWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "fit-content",
  paddingTop: "16px",
  paddingBottom: "16px",
  gap: "16px",
  backgroundColor: "#FFFFFF",
});

export const CompanyDetailTextContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  width: "100%",
  height: "fit-content",
  paddingLeft: "16px",
  paddingRight: "16px",
});

export const StyledCompanyDetailsText = styled(Typography)({
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "20px",
  letterSpacing: "0px",
  textTransform: "capitalize",
  color: "#0A0A0A",
});

export const InputContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "fit-content",
  paddingLeft: "16px",
  paddingRight: "16px",
  gap: "8px",

  "@media (max-width: 1320px)": {
    gap: "24px",
  }
});

export const GeneralInputRowContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  width: "100%",
  height: "fit-content",
  gap: "24px",

  "@media (max-width: 1320px)": {
    flexDirection: "column",
    gap: "24px",
  }
});

export const FormControlContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  width: "100%",
  height: "fit-content",
  gap: "8px",

  "@media (max-width: 650px)":{
    flexDirection: "column",
    alignItems: "start",
  }
});

export const InputLabelWrapper = styled(Grid)(({col})=>({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  minWidth: col === "first" ? "208px" : col === "second" ? "152px" : "180px",
  maxWidth: col === "first" ? "208px" : col === "second" ? "152px" : "180px",
  height: "fit-content",
  paddingTop: "2px",
  paddingBottom: "2px",
  gap: "2px",

  "@media (max-width: 1320px)": {
    minWidth: "208px",
  }
}));

export const InputLabelContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  width: "100%",
  height: "fit-content",
  gap: "2px",
});

export const StyledInputLabelText = styled(Typography)({

  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "20px",
  letterSpacing: "0px",
  textTransform: "capitalize",
  color: "#424242",
});

export const StyledGeneralInput = styled(Input)({
  height: "24px",
  width: "100%",
  border: "1px solid #E0E0E0",
  borderRadius: "4px",
  paddingLeft: "8px",
  paddingRight: "8px",
  color: "#0A0A0A",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0px",
  verticalAlign: "middle",

  "::before": {
    border: "none !important",
  },
  "::after": {
    border: "none",
  },

  "& .MuiInputBase-input": {
    padding: 0,
  },
});

export const RequiredSymbolContainer = styled(Grid)({
  display: "flex",
  alignItems: "start",

  width: "fit-content",
  height: "16px",
  gap: "4px",
});

export const StyledRequiredSymbol = styled(Typography)({
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "16px",
  letterSpacing: "0px",
  textTransform: "capitalize",
  color: "#FF3B30",
});

export const StyledTooltip = styled(Box)({

});

export const StyledPunctuation = styled(Typography)({
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "20px",
  letterSpacing: "0px",
  verticalAlign: "middle",
  color: "#424242",
});

export const CheckboxLabel = styled(FormControlLabel)({
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "20px",
  letterSpacing: "0px",
  textTransform: "capitalize",
  color: "#424242",
  margin: 0,
  gap: "4px",
});

export const StyledCheckbox = styled(Checkbox)({
  width: "13.5px",
  height: "13.5px",
  fontSize: "13.5px",
  color: "#757575",

  "& .MuiButtonBase-root": {
    border: "none",
  },

  "& .MuiSvgIcon-root": {
    width: "20px",
    height: "20px",
  },
});

export const ContactNumberInputContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  width: "100%",
  height: "fit-content",
  gap: "2px",
});

export const StyledContactNumberInput = styled(Input)({
  height: "fit-content",
  flex: "0 1 calc(10% - 8px)",
  minWidth: "25px",
  border: "1px solid #E0E0E0",
  borderRadius: "4px",
  paddingLeft: "8px",
  color: "#0A0A0A",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0px",
  verticalAlign: "middle",

  "::before": {
    border: "none !important",
  },
  "::after": {
    border: "none",
  },

  "& .MuiInputBase-input": {
    padding: 0,
  },
});

export const IDStyledFormControl = styled(FormControl)({
  display: "flex",
  alignItems: "center",

  width: "100%",
  height: "fit-content",
});

export const IDStyledSelect = styled(Select)(({itemSelected})=>({
  width: "100%",
  height: "100%",
  borderRadius: "4px",
  border: "1px solid #E0E0E0",
  color: itemSelected ? "#0A0A0A" : "#757575",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0px",
  verticalAlign: "middle",
  paddingLeft: "10px",

  "::before": {
    border: "none !important",
  },
  "::after": {
    border: "none",
  },

  "& .MuiInputBase-input": {
    padding: 0,
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  }
}));

export const StyledTextarea = styled("textarea")({
  width: "100%",
  height: "132px",
  border: "1px solid #E0E0E0",
  borderRadius: "4px",
  color: "#0A0A0A",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0px",
  verticalAlign: "middle",
  backgroundColor: "#FFFFFF",
  resize: "none",
});

export const StyledCharacterCount = styled(Typography)({
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "16px",
  letterSpacing: "0px",
  textTransform: "capitalize",
  color: "#000000",
});

export const AddressStyledFormControl = styled(FormControl)({
  display: "flex",
  alignItems: "center",

  width: "100%",
  height: "fit-content",
});

export const AddressStyledSelect = styled(Select)({
  width: "100%",
  height: "24px",
  borderRadius: "4px",
  border: "1px solid #E0E0E0",
  color: "#0A0A0A",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0px",
  verticalAlign: "middle",
  paddingLeft: "10px",

  "::before": {
    border: "none !important",
  },
  "::after": {
    border: "none",
  },

  "& .MuiInputBase-input": {
    padding: 0,
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  }
});

export const ExpandIcon = styled(Box)({
  width: "20px",
  height: "20px",
});