import { Grid, Paper, Typography } from "@mui/material";
import Orders from "./Orders";
import ProTip from "./ProTip";
import Chart from "./Chart";

export default function Dashboard() {
  return (
    <>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        {" "}
        {/****************/}
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Chart />
        </Paper>
      </Grid>
      {/* Some content */}{" "}
      {/*******************************************************/}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI Vite.js example in TypeScript
          </Typography>
        </Paper>
      </Grid>
      {/* Recent Orders */}{" "}
      {/******************************************************/}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Orders />
        </Paper>
      </Grid>
      {/* Some content */}{" "}
      {/*********************************************************/}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <ProTip />
        </Paper>
      </Grid>
      {/****************/}
    </>
  );
}
