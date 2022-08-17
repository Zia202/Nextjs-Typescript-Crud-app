import {
  Typography,
  Box,
  Stack,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "../components/layout";
const card = () => {
  return (
    <>
      <Layout>
        <Grid container>
          <Grid item sm={12} md={4} lg={4}>
            <Link href="/">
              <IconButton variant="outlined" color="inherit">
                <HomeIcon />
              </IconButton>
            </Link>
            <Box
              sx={{
                border: "2px solid grey",
                borderRadius: "1rem",
                padding: "1rem",
              }}
            >
              <Stack direction="column" spacing={2}>
                <Typography variant="h4">Hello, Zia Ullah Sarwar</Typography>
                <Typography variant="subtitle1">
                  Make your personal card
                </Typography>
                <Link href="/create_card">
                  <Button variant="contained" color="success">
                    <Typography variant="subtitle2">Create new</Typography>
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Grid>
          <Grid item sm={12} md={8} lg={8}></Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default card;
