import * as React from "react";
import {
  Box,
  Button,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { productsData } from "@/utils/Data";

export default function CardItem() {
  return (
    <>
      {productsData.map((i) => (
        <Grid key={i.id} item xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              ":hover": {
                boxShadow: 20,
                cursor: "pointer",
              },
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="180"
              image={`/images/${i.image}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {i.name}
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography variant="body2" color="">
                  قیمت:
                </Typography>
                <Typography variant="body2" color="red">
                  {i.price} تومان
                </Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button sx={{fontWeight:"bold" }} size="large">مشاهده و سفارش</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}
