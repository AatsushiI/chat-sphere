import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { spacing, styled } from "@mui/system";
import { Link } from "react-router-dom";

const pages = [
  { title: "ホーム", link: "/" },
  { title: "選択肢1", link: "/" },
  { title: "選択肢2", link: "/" },
];

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <ContentTitle>ChatSphere</ContentTitle>
          {/*レスポンシブ対応なしの表示 */}
          <LinkBox>
            {pages.map((page) => (
              <Link to={page.link}>
                <LinkButton key={page}>{page.title}</LinkButton>
              </Link>
            ))}
          </LinkBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const ContentTitle = styled(Typography)({
  marginRight: spacing(2),
  display: "flex",
  fontFamily: "sans-serif",
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
});

const LinkBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  flexGrow: 1,
});

const LinkButton = styled(Button)({
  margin: spacing(2, 0),
  color: "white",
  display: "block",
});
export default ResponsiveAppBar;
