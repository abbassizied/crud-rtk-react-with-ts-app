import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import TaskDataService from "../../services/task.service";
import { ITask } from "../../services/type";
import { AxiosError } from "axios";

//-------------------------------------------------------------
// types declaration

interface TasksState {
  entities: ITask[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  success: string | undefined;
  error: string | undefined;
}

//-------------------------------------------------------------

const initialState = {
  entities: [],
  loading: "idle",
  success: undefined,
  error: undefined,
} as TasksState;

// List Todo
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (_, { rejectWithValue }) => {
  try {
    const response = await TaskDataService.getAll();
    const tasks = await response.data;
    return tasks;
  } catch (_err) {
    const error = _err as AxiosError;
    return rejectWithValue({ data: error.message  });
  }
});

// get Todo By Id
export const getTaskById = createAsyncThunk(
  "tasks/getTaskById",
  // if you type your function argument here
  async (id: number) => {
    try {
      const response = await TaskDataService.get(id);
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Delete Todo
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  // if you type your function argument here
  async (id: number) => {
    try {
      const response = await TaskDataService.delete(id);
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Update Todo
export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (task: ITask) => {
    try {
      const response = await TaskDataService.update(task);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Add ToDo
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task: ITask) => {
    try {
      const response = await TaskDataService.create(task);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

/********************************************************************
 ********************************************************************
 ********************************************************************/

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder
      // You can chain calls, or have separate `builder.addCase()` lines each time
      // All calls to `builder.addCase` must come before any calls to `builder.addMatcher` or `builder.addDefaultCase`.
      //----------------------------------------------------
      // get Todos
      .addCase(fetchTasks.pending, (state) => {
        // both `state` and `action` are now correctly typed
        // based on the slice state and the `pending` action creator
        state.loading = "pending";
      })
      .addCase(
        fetchTasks.fulfilled,
        (state, action) => {
          state.loading = "succeeded";
          state.entities = action.payload;
        }
      )
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = "failed";
        state.entities = [];
        state.error = action.error.message;
      })
      //----------------------------------------------------
      // Delete Todo
      .addCase(deleteTask.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        deleteTask.fulfilled,
        (state, action) => {
          state.loading = "succeeded";
          state.success = "Task was deleted";
          state.entities = action.payload;
        }
      )
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = "failed";
        state.entities = [];
        state.error = action.error.message;
      })
      //----------------------------------------------------
      // Update Todo
      .addCase(updateTask.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        updateTask.fulfilled,
        (state, action) => {
          state.loading = "succeeded";
          state.success = "Task was updated";
          state.entities = action.payload;
        }
      )
      .addCase(updateTask.rejected, (state, action) => {
        state.loading = "failed";
        state.entities = [];
        state.error = action.error.message;
      })
      //----------------------------------------------------
      // Add ToDo
      .addCase(addTask.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        addTask.fulfilled,
        (state, action) => {
          state.loading = "succeeded";
          state.success = "Task was added";
          state.entities = action.payload;
        }
      )
      .addCase(addTask.rejected, (state, action) => {
        state.loading = "failed";
        state.entities = [];
        state.error = action.error.message;
      })
      //----------------------------------------------------
      // get Todo By Id
      .addCase(getTaskById.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        getTaskById.fulfilled,
        (state, action) => {
          state.loading = "succeeded";
          state.entities = action.payload;
        }
      )
      .addCase(getTaskById.rejected, (state, action) => {
        state.loading = "failed";
        state.entities = [];
        state.error = action.error.message;
      });
    //----------------------------------------------------
  },
});

export default tasksSlice.reducer;
