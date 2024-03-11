import { createSlice } from "@reduxjs/toolkit";
import { taskDetailThunk, taskListThunk } from "./TaskThunk";



const TaskSlice = createSlice({
    name: "TaskSlice",
    initialState: {
        taskList: [],
        taskObject: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(taskListThunk.fulfilled, (state, { payload }) => {
                return { ...state, taskList: payload, isLoading: false };
            })
            .addCase(taskListThunk.pending, (state, payload) => {
                return { ...state, isLoading: true };
            })
            .addCase(taskDetailThunk.fulfilled, (state, { payload }) => {
                return { ...state, taskObject: payload, isLoading: false };
            })
            .addCase(taskDetailThunk.pending, (state, payload) => {
                return { ...state, isLoading: true };
            })
    }
})
export default TaskSlice.reducer;