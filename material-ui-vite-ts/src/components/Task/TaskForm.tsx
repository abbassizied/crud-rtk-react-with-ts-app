{
  /*
- The `sx` prop is a shortcut for defining custom style that has access to the theme.
- sx can accept all CSS attributes (using JSS syntax) and it can accept all values from the “MUI System“. 
- 
- 
- 
- 
- 
-  
*/
}

import React, { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import NotInterestedOutlinedIcon from "@mui/icons-material/NotInterestedOutlined";
import { ITask } from "../../services/type"; 
import { format } from 'date-fns'


const MAX_LENGTH = 15;

interface propsType {
  setIsShown: (a: boolean) => void;
  onAddTask: (a: ITask) => void;
}

export const TaskForm = ({ setIsShown, onAddTask }: propsType) => {
  const [completed, setCompleted] = useState(false);
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const reset = () => {
    setCompleted(false);
    setTitle("");
    setErrorMessage("");
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleCompletedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompleted(event.target.checked);
  };

  const handleOnSave = () => {
    if (title) {
      // It will evaluate to true if value is not: null, undefined, NaN, empty string '', 0, false
      let data: ITask = {
        title,
        completed,
        created_at: format(new Date(), "yyyy-MM-dd, HH:mm:ss"),
      };
      onAddTask(data);
      reset();
      setIsShown(false);
    }
  };

  useEffect(() => {
    // Set errorMessage only if text is equal or bigger than MAX_LENGTH
    if (title.length >= MAX_LENGTH) {
      setErrorMessage(
        "The Title has exceeded the maximum number of characters"
      );
    }
  }, [title]);

  useEffect(() => {
    // Set empty erroMessage only if text is less than MAX_LENGTH
    // and errorMessage is not empty.
    // avoids setting empty errorMessage if the errorMessage is already empty
    if (title.length < MAX_LENGTH && errorMessage) {
      setErrorMessage("");
    }
  }, [title, errorMessage]);

  return (
    <>
      <Divider textAlign="right">
        <Chip label="New Task Form" />
      </Divider>

      <form noValidate autoComplete="off">
        <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={2}>
            <FormControl>
              <TextField
                size="small"
                id="title"
                name="title"
                error={title.length >= MAX_LENGTH}
                label="Task Title"
                helperText={errorMessage}
                value={title}
                onChange={handleTitleChange}
              />
            </FormControl>
            <FormControl>
              <Checkbox
                id="completed"
                name="completed"
                checked={completed}
                onChange={handleCompletedChange}
                inputProps={{ "aria-label": "controlled" }}
                color="success"
              />
            </FormControl>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "flex-end", alignItems: "flex-end" }}
          >
            <Button
              variant="outlined"
              onClick={handleOnSave}
              startIcon={<SaveOutlinedIcon />}
            >
              Save
            </Button>

            <Button
              variant="outlined"
              onClick={() => {
                setIsShown(false);
              }}
              startIcon={<NotInterestedOutlinedIcon />}
              color="error"
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};
