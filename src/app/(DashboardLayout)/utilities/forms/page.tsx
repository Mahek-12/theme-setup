"use client";
import { Paper, Grid2 as Grid } from "@mui/material";
import BaseCard from "@/app/(DashboardLayout)/components/shared/BaseCard";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const Forms = () => {
  return (
    <Grid container>
      <Grid
        size={{
          xs: 12,
          lg: 12,
        }}
      >
        <BaseCard title="Demo">
          <></>
        </BaseCard>
      </Grid>
      <Grid
        size={{
          xs: 12,
          lg: 12,
        }}
      ></Grid>
    </Grid>
  );
};

export default Forms;
