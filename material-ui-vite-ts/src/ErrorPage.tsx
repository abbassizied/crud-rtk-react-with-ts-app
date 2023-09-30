import { Grid, Paper } from "@mui/material";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import Title from "./Title";

export default function ErrorPage() {
  // you don't need to explicitly set error to `unknown`
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <section>
            <Title>ErrorPage </Title>
            <i>{errorMessage}</i>
          </section>
        </Paper>
      </Grid>
    </>
  );
}
