// "use client";
// import { Box } from "@mui/material";
// import * as React from "react";
// import ColorGroup from "./ColorGroup";
// import BrandGroup from "./BrandGroup";
// import Category from "./Category";

// export default function Navbar() {
//   return (
//     <Box
//       sx={{
//         border: "1px solid #eeeeee",
//         padding: 1,
//         width: "14%",
//         maxHeight: 550,
//         overflow: "auto",
//         backgroundColor:"#fafafa"
//       }}
//     >
//       <Category />
//       <BrandGroup />
//       <ColorGroup />
//     </Box>
//   );
// }

"use client";
import { Box } from "@mui/material";
import * as React from "react";
import ColorGroup from "./ColorGroup";
import BrandGroup from "./BrandGroup";
import Category from "./Category";

export default function Navbar() {
  return (
    <Box
      sx={{
        border: "1px solid #eeeeee",
        padding: 1,
        maxHeight: 550,
        overflow: "auto",
        backgroundColor: "#fafafa",
        position: "sticky",
        top: 112,
      }}
    >
      <Category />
      <BrandGroup />
      <ColorGroup />
    </Box>
  );
}
