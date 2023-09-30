import { useEffect, useState } from "react";
import {
  Button,
  Collapse,
  Grid,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import AddIcon from "@mui/icons-material/Add";
import Title from "./Title";
import { TaskForm } from "./components/Task/TaskForm";
import TaskList from "./components/Task/TaskList";
import { useAppSelector, useAppDispatch } from "./hooks";
import {
  fetchTasks,
  deleteTask,
  updateTask,
  addTask,
} from "./features/tasks/tasksSlice";
import { ITask } from "./services/type";
import { RootState } from "./store";

export default function Todos() {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [open, setOpen] = useState(true);
  // The `state` arg is correctly typed as `RootState` already
  const dispatch = useAppDispatch();

  // const loading = useAppSelector((state: RootState) => state.tasks.loading);
  const { entities, loading, error, success } = useAppSelector(
    (state: RootState) => state.tasks
  );
  /*
  const entities = useAppSelector((state: RootState) => state.tasks.entities);
  const loading = useAppSelector((state: RootState) => state.tasks.loading);
  const error = useAppSelector((state: RootState) => state.tasks.error);
  const success = useAppSelector((state: RootState) => state.tasks.success);
*/

  //----------------------------------------------------------------------------------
  // just in case when it will be needed
  /*
  let tasks : ITask[]  = [ ...entities].sort(function (a: ITask, b: ITask) {
    // Use the getTime() method to return the number of seconds elapsed
    const result = Date.parse(a.created_at) - Date.parse(b.created_at); 
    return result * -1; //  sort by descending order :   * -1;
  });
  */
  //----------------------------------------------------------------------------------

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDeleteTask = (id: number) => {
    if (id === null || id === undefined) return;

    if (window.confirm("Are you sure you want to delete this task ?")) {
      dispatch(deleteTask(id))
        .unwrap()
        .then(() => {
          setOpen(true);
          dispatch(fetchTasks());
        });
    }
  };

  const handleAddTask = async (task: ITask) => {
    await dispatch(addTask(task))
      .unwrap()
      .then(() => {
        setOpen(true);
        dispatch(fetchTasks());
      });
  };

  const handleUpdateTask = async (task: ITask) => {
    await dispatch(updateTask(task))
      .unwrap()
      .then(() => {
        setOpen(true);
        dispatch(fetchTasks());
      });
  };

  return (
    <>
      <Grid item xs={12}>
        <Paper
          sx={{ p: 2, display: "flex", flexDirection: "column", margin: "1em" }}
        >
          <Stack direction="row" spacing={2}>
            {!isShown && (
              <Button
                variant="outlined"
                onClick={() => {
                  // 👇️ toggle shown state
                  setIsShown((current) => !current);
                }}
                startIcon={<AddIcon />}
                color="success"
              >
                New Task
              </Button>
            )}
          </Stack>
          {/* 👇️ show component on click */}
          {isShown && (
            <TaskForm setIsShown={setIsShown} onAddTask={handleAddTask} />
          )}
        </Paper>

        <Title>Todos </Title>
        {loading === "succeeded" || loading === "failed" ? (
          <>
            {success && (
              <Collapse in={open}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  {success}
                </Alert>
              </Collapse>
            )}
            {error && (
              <Alert variant="filled" severity="error">
                {error}
              </Alert>
            )}

            <TaskList
              tasks={entities}
              onUpdateTask={handleUpdateTask}
              onDeleteTask={handleDeleteTask}
            />
          </>
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <center>
                <CircularProgress />
              </center>
            </Box>
          </>
        )}
      </Grid>
    </>
  );
}
