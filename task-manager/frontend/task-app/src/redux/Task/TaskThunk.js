import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../API/ApiClient";

export const taskListThunk = createAsyncThunk(
    "tasks/taskListThunk",
    async (payload, { rejectedWithValue }) => {
        try {
            const response = await apiClient.get(`/tasks/`, { params: payload });
           
            return response.data;
        } catch (error) {
            
            if (error.response) {
                return rejectedWithValue(error.response.data);
            }
            console.error(error);
            throw error; 
        }
    }
);

export const taskDetailThunk = createAsyncThunk(
    "tasks/taskDetailThunk",
    async (payload, { rejectedWithValue }) => {
        try {
            const response = await apiClient.get(`/tasks/${payload}`);
           
            return response.data;
        } catch (error) {
            
            if (error.response) {
                return rejectedWithValue(error.response.data);
            }
            console.error(error);
            throw error; 
        }
    }
);


