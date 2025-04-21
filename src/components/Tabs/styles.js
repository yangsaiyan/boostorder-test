import { Grid, styled, Typography } from "@mui/material";

export const TabsWrapper = styled(Grid)({
  width: "100%",
  minHeight: "40px",
  gap: "8px",
  backgroundColor: "#FFFFFF",
  borderBottom: "1px solid #E0E0E0",
  overflowX: "scroll",
  overflowY: "hidden",

  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const TabsContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",

  width: "fit-content",
  height: "100%",
  paddingLeft: "8px",
  paddingRight: "8px",
});

export const StyledTabContainer = styled(Grid)(({ selected }) => ({
  display: "flex",
  alignItems: "center",

  width: "fit-content",
  height: "40px",
  borderBottom: selected && "2px solid #007AFF",
}));

export const TextContainer = styled(Grid)({
  paddingLeft: "8px",
  paddingRight: "8px",
});

export const StyledText = styled(Typography)(({ selected }) => ({
  fontFamily: "Montserrat",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "18px",
  letterSpacing: 0,
  textAlign: "center",
  color: selected ? "#007AFF" : "#757575",
  textWrap: "nowrap",

  cursor: "pointer",
}));
