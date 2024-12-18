import React from "react";
import { Box, Typography } from "@mui/material";

function Overview() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        A Practical Guide To Anyone Starting A Career As A Scrum Master Helping
        Them Tackle Many Daily Situations
      </Typography>
      <Box display="flex" flexWrap="wrap" alignItems="center" gap={2} mb={2}>
        <Typography>📚 156 Students</Typography>
        <Typography>🎓 Beginner Level</Typography>
        <Typography>📖 20 Lessons</Typography>
        <Typography>⏱ 33 total mins</Typography>
      </Box>
      <div
        style={{
          textTransform: "capitalize",
          fontWeight: "700",
          fontSize: "18px",
          color: "#444",
        }}
      >
        description :
      </div>
      <Typography sx={{ color: "#555" }}>
        This course is a practical guide for people who are starting a career as
        a scrum master, or it’s also suitable for the teams adopting an Agile
        mindset to have a daily and practical guide to help them in their daily
        challenges and lead them towards continuous improvement.
      </Typography>
    </Box>
  );
}

export default Overview;
