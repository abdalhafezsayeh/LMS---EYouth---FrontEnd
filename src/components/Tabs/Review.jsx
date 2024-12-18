import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  LinearProgress,
  Pagination,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReplyIcon from "@mui/icons-material/Reply";

const reviewsData = [
  {
    id: 1,
    name: "Laura Hipster",
    date: "October 03, 2022",
    text: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
  },
  {
    id: 2,
    name: "Laura Hipster",
    date: "October 03, 2022",
    text: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
  },
  {
    id: 3,
    name: "Laura Hipster",
    date: "October 03, 2022",
    text: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
  },
];

const ratingsDistribution = [
  { stars: 5, percentage: 90 },
  { stars: 4, percentage: 5 },
  { stars: 3, percentage: 2 },
  { stars: 2, percentage: 2 },
  { stars: 1, percentage: 1 },
];

const ReviewsComponent = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box>
      {/* Comments Header */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Comments
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mr: 1 }}>
          4.0
        </Typography>
        {[...Array(4)].map((_, i) => (
          <StarIcon key={i} color="warning" />
        ))}
        <StarBorderIcon />
        <Typography variant="body2" sx={{ ml: 1 }}>
          based on 146,951 ratings
        </Typography>
      </Box>

      {/* Ratings Distribution */}
      {ratingsDistribution.map((rating, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Typography variant="body2" sx={{ width: 50 }}>
            {`${"★".repeat(rating.stars)}`}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={rating.percentage}
            sx={{ flexGrow: 1, height: 8, mx: 2 }}
            color="warning"
          />
          <Typography variant="body2">{`${rating.percentage}%`}</Typography>
        </Box>
      ))}

      <Divider sx={{ my: 2 }} />

      {/* Comments List */}
      <List>
        {reviewsData.map((review) => (
          <React.Fragment key={review.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={review.name}
                  src="https://via.placeholder.com/150"
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box display="flex" justifyContent="space-between">
                    <Typography fontWeight="bold">{review.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {review.date}
                    </Typography>
                  </Box>
                }
                secondary={
                  <>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {review.text}
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      sx={{ cursor: "pointer" }}
                    >
                      <ReplyIcon fontSize="small" sx={{ mr: 0.5 }} />
                      <Typography variant="body2">Reply</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={3}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Box>
  );
};

export default ReviewsComponent;
