import { Box, AppBar, Toolbar, styled, Stack } from "@mui/material";

import Link from "next/link";
const Topbar = () => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: "#11142d",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: "61px",
    },
    zIndex: 9,
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled sx={{ flexWrap: "wrap" }}>
        <Stack
          spacing={{ xs: 1, sm: 8 }}
          direction="row"
          useFlexGap
          sx={{
            flexWrap: "wrap",
            justifyContent: { xs: "center", lg: "between" },
            paddingY: { xs: "8px", lg: "0px" },
            width: { xs: "100%", lg: "auto" },
          }}
        >
          <Link href="/">Logo</Link>
          <Stack
            spacing={1}
            direction="row"
            sx={{ flexWrap: "wrap", display: { xs: "none", lg: "flex" } }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>Item1</Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>Item2</Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>Item3</Box>
          </Stack>
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Topbar;
