import { Box, Grid, Theme, Typography } from "@mui/material";

import { FormatQuote } from "@mui/icons-material";
import React from "react";
// import { FormatQuote } from '@mui/icons-material'
import { useTheme } from "@emotion/react";

export interface TestimonyProps {
  message: string;
  authorPortraitImgSrc: string;
  authorName: string;
  authorTitle: string;
  style?: any;
}

export const Testimony = ({
  message,
  authorPortraitImgSrc,
  authorName,
  authorTitle,
  style
}: TestimonyProps) => {
  const theme = useTheme() as Theme;

  return (
    <Grid
      container
      style={{
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: "max(100%, 300px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style
      }}
    >
      <Grid
        item
        container
        md={8}
        sx={{
          height: "100%",
          padding: 2,
          margin: "auto",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Grid
          item
          md={3}
          sx={{
            maxHeight: "50%",
            display: "flex",
            justifyContent: "center",
            position: "relative"
          }}
        >
          <img
            alt={`${authorName}_TestimonyPortrait`}
            style={{
              borderRadius: "100%",
              aspectRatio: "1",
              maxWidth: "200px",
              maxHeight: "200px"
            }}
            src={authorPortraitImgSrc}
          />
          <Box
            sx={{
              height: "40px",
              width: "40px",
              position: "absolute",
              right: "1%",
              top: "1%"
            }}
            component={FormatQuote}
          />
        </Grid>
        <Grid
          item
          md={9}
          sx={{
            padding: 3,
            display: "flex",
            alignItems: "center",
            textAlign: "justify",
            flexFlow: "column"
          }}
        >
          <Typography variant="body1">"{message}"</Typography>
          <p style={{ alignSelf: "flex-end", marginBottom: 0 }}>
            <Typography variant="body1">
              {authorName}, {authorTitle}
            </Typography>
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};
