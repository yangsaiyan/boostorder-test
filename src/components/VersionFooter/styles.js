import { Grid, styled, Typography } from "@mui/material";

export const FooterWrapper = styled(Grid)({
  display: "flex",
  justifyContent: "end",

  width: "100%",
  height: "100%",
  maxHeight: "32px",
  padding: "4px 16px 4px 16px",
  borderTop: "1px solid #E0E0E0",
  backgroundColor: "#FFFFFF",
});

export const TextContainer = styled(Grid)({
  display: "flex",

  width: "fit-content",
  height: "fit-content",
});

export const StyledText = styled(Typography)({
  fontFamily: "Montserrat",
  fontSize: "14px",
  color: "#00000099",
  fontWeight: 400,
  lineHeight: "24px",
  textAlign: "center",
});
