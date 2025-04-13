import {
  Badge,
  Box,
  Grid,
  Input,
  InputAdornment,
  styled,
  Typography,
} from "@mui/material";
import SearchIconSVG from "../../../public/LeadingIcon.svg";

export const NavbarWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  width: "100%",
  height: "56px",
  gap: "8px",
  paddingLeft: "16px",
  paddingRight: "16px",
  backgroundColor: "#FFFFFF",
  borderBottom: "1px solid #E0E0E0",
});

export const PathContainer = styled(Grid)({
  display: "flex",

  width: "100%",
  height: "fit-content",
});

export const PathItem = styled(Grid)({
  display: "flex",
  alignItems: "center",

  width: "fit-content",
  height: "fit-content",
});

export const PathTextContainer = styled(Grid)({
  padding: "4px 6px 4px 6px",
});

export const StyledIcon = styled(Box)({
  width: "16px",
  height: "16px",
});

export const StyledText = styled(Typography)(({ status }) => ({
  fontFamily: "Montserrat",
  fontSize: "12px",
  fontWeight: 600,
  lineHeight: "16px",
  letterSpacing: 0,
  textAlign: "center",
  verticalAlign: "middle",
  color: status ? "#424242" : "#9E9E9E",
}));

export const ActionsContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  width: "100%", 
  maxWidth: "fit-content",
  height: "100%",
  gap: "16px",
});

export const LeftWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  width: "auto",
  height: "100%",
  padding: "8px",
});

export const LeftContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  width: "fit-content",
  height: "fit-content",
  gap: "12px",
});

export const UserDetailsContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  width: "fit-content",
  height: "fit-content",
  gap: "4px",
});

export const LanguageContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",

  width: "fit-content",
  height: "fit-content",
  padding: "8px 12px 8px 12px",
  borderRadius: "4px",
  border: "1px solid #E0E0E0",
  backgroundColor: "#F5F5F5",
});

export const LanguageText = styled(Typography)({
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "16px",
  letterSpacing: 0,
  textAlign: "center",
  verticalAlign: "middle",
  color: "#424242",
});

export const Searhbar = styled(Input)({
  height: "40px",
  minWidth: "323px",
  border: "1px solid #E0E0E0",
  borderRadius: "4px",
  paddingLeft: "16px",
  paddingRight: "16px",
  color: "#9E9E9E",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",

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

export const StyledInputAndorsement = styled(InputAdornment)({
  display: "flex",

  marginRight: "8px",
});

export const SearchIcon = styled(Box)({
  width: "20px",
  height: "20px",
});

export const StyledBadge = styled(Badge)({

  "& .MuiBadge-badge": {
    minWidth: "16px",
    width: "16px",
    height: "16px",
    backgroundColor: "#FF3B30 !important",
  },
});

export const NotificationIcon = styled(Box)({
  width: "24px",
  height: "24px",
});

export const UserImage = styled(Box)({
  width: "32px",
  height: "32px",
  borderRadius: "32px",
});

export const NameContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  width: "100%",
  maxWidth: "83px",
  height: "fit-content",
  gap: "2px",
});

export const StyledUsername = styled(Typography)({
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "18px",
  letterSpacing: 0,
  verticalAlign: "middle",
  textAlign: "center",
  color: "#0A0A0A",
  textTransform: "capitalize",
  textWrap: "nowrap",
});

export const StyledCompany = styled(Typography)({
  fontFamily: "Montserrat",
  fontSize: "10px",
  fontWeight: 500,
  lineHeight: "12px",
  letterSpacing: 0,
  verticalAlign: "middle",
  textAlign: "center",
  color: "#616161",
  textTransform: "capitalize",
  textWrap: "nowrap",
});

export const ArrowDownIcon = styled(Box)({
  width: "20px",
  height: "20px",
});