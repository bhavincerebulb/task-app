import React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';

const TaskStatus = ({ status, onChange }) => {
    return (
        <FormControl>
            <Select
                value={status}
                onChange={(e) => onChange(e.target.value)}
            >
                <MenuItem value="To Do">To Do</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
            </Select>
        </FormControl>
    );
};

export default TaskStatus;
