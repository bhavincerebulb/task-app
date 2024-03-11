import React, { useState } from 'react'
import { Button, Container, Grid, Typography } from '@mui/material';
import TaskList from '../../components/Tasks/TaskList';
import FilterTasks from '../../components/Tasks/FilterTasks';
import { useNavigate } from 'react-router-dom/dist';

const TaskPage = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('');
    const handleFilterChange = (value) => {
        setFilter(value);
    };

    return (
        <>
            <Container maxWidth="md">
                <Grid container spacing={2} className='displayflex width100' margin={"0"}  >
                    <div item>
                        <h3>
                            Task Management
                        </h3>
                    </div>
                    <div item>
                        <Button onClick={e => navigate("/tasks/create")} name="submit" variant="contained">Add Task</Button>
                    </div>
                </Grid>
                <Grid container spacing={2} className='displayflex' margin={"0"} style={{width:'250px'}}>
                    <FilterTasks filter={filter} onFilterChange={handleFilterChange} /></Grid>
                <TaskList filter={filter} />
            </Container>
        </>
    )
}

export default TaskPage