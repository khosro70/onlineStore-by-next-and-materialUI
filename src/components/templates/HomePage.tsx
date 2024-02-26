"use client";
import { Box, Grid, ScopedCssBaseline } from "@mui/material";
import React from "react";
import Navbar from "../modules/homePage/navbar/Navbar";
import MainContentFilter from "../modules/homePage/mainContent/MainContentFilter";
import CardItem from "../modules/homePage/mainContent/CardItem";

const HomePage: React.FC = () => {
  return (
    <ScopedCssBaseline>
      <Box
        sx={{
          width: "100%",
          padding: 2,
          backgroundColor: "#eeeeee",
          minHeight: 620,
          marginBottom: 2,
        }}
        dir="rtl"
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            md={3}
            lg={2}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Navbar />
          </Grid>
          <Grid item xs={12} md={9} lg={10} sx={{}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <MainContentFilter />
              <Box>
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 2 }}
                >
                  <CardItem />
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ScopedCssBaseline>
  );
};

export default HomePage;
