import { List, ListItem, Typography } from "@mui/material";
import Task from "./Task";
import { Divider, Stack } from "@mui/material";
import { ITask } from "../../services/type";  

interface propsType {
  tasks: ITask[];
  onUpdateTask: (arg: ITask) => void;
  onDeleteTask: (arg: number) => void;
}

export default function TaskList({
  tasks,
  onUpdateTask,
  onDeleteTask
}: propsType) {
  return (
    <div>
      <Typography variant="h5">TaskList</Typography>

      <List sx={{ width: "100%" }}>
        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={2}
        >
          {tasks.length &&
            tasks.map((task, i) => (
              <ListItem
                key={i}
                sx={{ width: "100%", bgcolor: "background.paper" }}
              >
                <Task
                  task={task}
                  onUpdateTask={onUpdateTask}
                  onDeleteTask={onDeleteTask}
                />
              </ListItem>
            ))}
        </Stack>
      </List>
    </div>
  );
}
