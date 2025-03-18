"use client";
import { Grid2 as Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={0}>
          {/* ------------------------- row 1 ------------------------- */}
          <Grid
            size={{
              xs: 12,
              lg: 12,
            }}
          ></Grid>
          {/* ------------------------- row 2 ------------------------- */}
          <Grid
            size={{
              xs: 12,
              lg: 4,
            }}
          ></Grid>
          <Grid
            size={{
              xs: 12,
              lg: 8,
            }}
          ></Grid>
          {/* ------------------------- row 3 ------------------------- */}
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
