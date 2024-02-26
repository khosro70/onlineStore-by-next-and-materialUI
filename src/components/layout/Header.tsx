"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { Link } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchInput from "../modules/homePage/appbar/searchInput";
import BasketButton from "../modules/homePage/appbar/BasketButton";
import MenuItems from "../modules/homePage/appbar/MenuItems";
import DrawerSection from "../modules/homePage/appbar/DrawerSection";

function Header() {
  return (
    <AppBar
      dir="rtl"
      position="sticky"
      sx={{
        backgroundColor: "rgb(250 250 249)",
        paddingY: 1,
        marginBottom: 2,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DrawerSection />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <Link href="/">
              <ApartmentIcon
                sx={{
                  color: "purple",
                  marginLeft: 4,
                  fontSize: 36,
                  cursor: "pointer",
                  display: { xs: "none", md: "block" },
                }}
              />
            </Link>
            <MenuItems />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "#bdbdbd",
                borderRadius: 1,
                paddingRight: 1,
                display: { xs: "none", sm: "flex" },
              }}
            >
              <SearchIcon sx={{ color: "black",cursor:"pointer" }} />
              <SearchInput />
            </Box>
            <BasketButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
