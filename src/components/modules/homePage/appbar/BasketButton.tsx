import * as React from "react";
import { IconButton, Link, Typography } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import theme from "../../../../../theme.config";

const BasketButton: React.FC = () => {
  return (
    <Link
      sx={{
        display: "flex",
        marginRight: 2,
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        textDecoration: "none",
        cursor: "pointer",
        color: "black",
        transition: "background-color 0.3s, color 0.3s, border 0.3s",
        "& .MuiTypography-root": {
          fontWeight: theme.typography.fontWeightBold,
          fontSize: 18,
        },
        border: "1px solid red",
        paddingX: 1,
        borderRadius: 1,
        "&:hover": {
          backgroundColor: "#1e88e5",
          color: "white",
          border: "1px solid transparent",
          "& .MuiTypography-root": {
            color: "white",
          },
          "& .MuiSvgIcon-root": {
            color: "white",
          },
        },
      }}
    >
      <IconButton sx={{ color: "green" }}>
        <ShoppingBasketIcon />
      </IconButton>
      <Typography>سبد خرید</Typography>
    </Link>
  );
};

export default BasketButton;
