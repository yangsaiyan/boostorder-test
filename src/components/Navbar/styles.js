import { Box, Grid, styled } from "@mui/material";

export const Container = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",

  width: "58px",
  height: "100vh",
  paddingTop: "8px",
  paddingBottom: "8px",
  gap: "8px",

  backgroundColor: "#004366",

  overflowY: "scroll",

  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const HeaderWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  height: "100%",
  maxHeight: "88px",
  paddingLeft: "8px",
  paddingRight: "8px",
  gap: "8px",
});

export const LogoContainer = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  height: "100%",
  maxWidth: "40px",
  maxHeight: "40px",
  paddingTop: "8px",
  paddingBottom: "8px",
  gap: "10px",
});

export const SearchIconContainer = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  height: "100%",
  maxWidth: "40px",
  maxHeight: "40px",
});

export const SearchIconBase = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "40px",
  height: "40px",
  borderRadius: "32px",
  backgroundColor: "#007AFF",
});

export const Logo = styled(Box)({
  width: "100%",
  height: "100%",
  maxWidth: "31.10777473449707px",
  maxHeight: "24px",
});

export const SearchIcon = styled(Box)({
  width: "100%",
  height: "100%",
  maxWidth: "20px",
  maxHeight: "20px",
});

export const TabsWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "fit-content",
  paddingLeft: "8px",
  paddingRight: "8px",
  gap: "8px",
});

export const StyledSection = styled(Grid)({
  display: "flex",
  flexDirection: "column",

  borderTop: "1px solid #FFFFFF1F",
  paddingTop: "8px",
});

export const IconContainer = styled(Grid)({
  width: "100%",
  height: "100%",
  maxWidth: "40px",
  maxHeight: "40px",
  padding: "10px",
});

export const StyledIcon = styled(Box)({
  width: "20px",
  height: "20px",
});
