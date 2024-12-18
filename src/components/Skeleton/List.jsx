import { Skeleton } from "@mui/material";
import React from "react";

function List() {
  return (
    <div>
      <Skeleton variant="text" sx={{ fontSize: "5rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "4rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "5rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "5rem" }} />
    </div>
  );
}

export default List;
