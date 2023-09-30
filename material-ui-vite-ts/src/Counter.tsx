import { Button, Grid, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Stack from "@mui/material/Stack";
import Title from "./Title";

import { useAppSelector, useAppDispatch } from "./hooks";
import { decrement, increment } from "./features/counter/counterSlice";

export default function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  // omit rendering logic

  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Title>Counter </Title>

          <i>count is {count}</i>

          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              onClick={() => {
                dispatch(increment());
              }}
              startIcon={<AddIcon />}
              color="success"
            >
              Increment By One
            </Button>

            <Button
              variant="outlined"
              onClick={() => {
                dispatch(decrement());
              }}
              startIcon={<RemoveIcon />}
              color="error"
            >
              Decrement By One
            </Button>
          </Stack>
        </Paper>
      </Grid>
    </>
  );
}
