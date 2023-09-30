import { Grid, Paper } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Title from "./Title";

export default function Employees() {
  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Title>Employees </Title>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Paper>
      </Grid>
    </>
  );
}
