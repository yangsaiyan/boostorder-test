import { Grid, styled } from "@mui/material";


export const Wrapper = styled(Grid)({
    display: "flex",
    flexDirection: "row",

    width: "100vw",
    height: "100vh",

    "@media(max-width: 650px)":{
        height: "100%",
    }
}) 