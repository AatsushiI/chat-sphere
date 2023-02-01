import React from "react";
import { styled } from "@mui/system";
import { Container } from "@mui/material";

const Main = (props) => {
  return <MainContainer maxWidth="sm">{props.children}</MainContainer>;
  // return <main style={styles.container}>{props.children}</main>;
};

export default Main;

const MainContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
