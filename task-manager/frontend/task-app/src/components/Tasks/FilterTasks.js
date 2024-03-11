import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FilterTasks = ({ filter, onFilterChange }) => {
    return (
        <FormControl fullWidth>
            <InputLabel>Filter by Status</InputLabel>
            <Select
                value={filter}
                onChange={(e) => onFilterChange(e.target.value)}
            >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="in_progress">In Progress</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
            </Select>
        </FormControl>
    );
};

export default FilterTasks;
