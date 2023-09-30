import { useState } from "react";
import { useImmer } from "use-immer";
import { Box, Checkbox, ListItemText, TextField } from "@mui/material";
import { teal } from "@mui/material/colors";
import { Button, Stack } from "@mui/material";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import CheckBoxOutlineBlankTwoToneIcon from "@mui/icons-material/CheckBoxOutlineBlankTwoTone";
import NotInterestedOutlinedIcon from "@mui/icons-material/NotInterestedOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { ITask } from "../../services/type";
import { format } from "date-fns";

interface propsType {
  task: ITask;
  onUpdateTask: (arg: ITask) => void;
  onDeleteTask: (arg: number) => void;
}

export default function Task({ task, onUpdateTask, onDeleteTask }: propsType) {
  const [toDo, updateToDo] = useImmer<ITask>(task);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  //*********************************************************/

  const handleCompletedChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    // console.log("---------------------" + e.target.checked);
    let newValue: boolean = e.target.checked;
    updateToDo((draft) => {
      draft.completed = newValue;
    });
  };

  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    // console.log(e.target.value);
    const newTitle: string = e.target.value;
    updateToDo((draft) => {
      draft.title = newTitle;
    });
  };

  const reset = () => {
    updateToDo((draft) => {
      draft.id = task.id;
      draft.title = task.title;
      draft.completed = task.completed;
    });
  };

  const Cancel = () => {
    setIsEditing(false);
    reset();
  };

  const handleOnUpdate = () => {
    if (toDo.title) {
      // It will evaluate to true if value is not: null, undefined, NaN, empty string '', 0, false
      let data: ITask = {
        ...toDo,
        updated_at: format(new Date(), "yyyy-MM-dd, HH:mm:ss"),
      };
      onUpdateTask(data);
      setIsEditing(false);
    }
  };

  //*********************************************************/
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <Stack direction="row" spacing={2} sx={{ width: "70%" }}>
          <Checkbox
            checked={toDo.completed}
            onChange={handleCompletedChange}
            sx={{
              color: teal[800],
              "&.Mui-checked": {
                color: teal[300],
              },
            }}
          />

          <TextField
            sx={{ width: 100 }}
            size="small"
            value={toDo.title}
            onChange={handleTitleChange}
          />
        </Stack>
        <Stack direction="row" spacing={2} sx={{ width: "30%" }}>
          <Button
            variant="outlined"
            startIcon={<SaveOutlinedIcon />}
            onClick={handleOnUpdate}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            onClick={Cancel}
            startIcon={<NotInterestedOutlinedIcon />}
            color="error"
          >
            Cancel
          </Button>
        </Stack>
      </>
    );
  } else {
    taskContent = (
      <>
        <Stack direction="row" spacing={2} sx={{ width: "70%" }}>
          {toDo.completed ? (
            <CheckBoxTwoToneIcon
              sx={{
                color: teal[800],
                "&.Mui-checked": {
                  color: teal[300],
                },
              }}
            />
          ) : (
            <CheckBoxOutlineBlankTwoToneIcon
              sx={{
                color: teal[800],
                "&.Mui-checked": {
                  color: teal[300],
                },
              }}
            />
          )}
          <ListItemText primary={toDo.title} />
        </Stack>
        <Stack direction="row" spacing={2} sx={{ width: "30%" }}>
          <Button
            variant="outlined"
            startIcon={<ModeEditOutlineOutlinedIcon />}
            color="warning"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            startIcon={<RemoveIcon />}
            color="error"
            onClick={() => onDeleteTask(Number(toDo.id))}
          >
            Delete
          </Button>
        </Stack>
      </>
    );
  }
  return (
    <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
      {taskContent}
    </Stack>
  );
}
