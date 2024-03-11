import React, { useState, useEffect } from 'react';
import { List, Stack, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
import { taskListThunk } from '../../redux/Task/TaskThunk';
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import apiClient from "../../API/ApiClient";
import { DataGrid } from "@mui/x-data-grid";

const TaskList = ({ filter }) => {
    const [tasks, setTasks] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const taskList = useSelector(
        (state) => state.TaskReducer.taskList
    );

    useEffect(() => {
        if (filter) {
            const taskList1 = taskList.filter(task => task.status == filter)
            setTasks([...taskList1]);
        } else {
            setTasks(taskList);
        }
    }, [filter, taskList])

    useEffect(() => { dispatch(taskListThunk()) }, [dispatch])

    const columns = [
        { field: "id", headerName: "ID", flex: 1 },
        { field: "title", headerName: "Title", flex: 2 },
        { field: "description", headerName: "description", flex: 2 },
        { field: "status", headerName: "status", flex: 2 },
        {
            field: "actions",
            headerName: "Actions",
            flex: 1.5,
            renderCell: (params) => (
                <Stack direction="row" spacing={2}>
                    <Tooltip title="Edit">
                        <p
                            onClick={() => handleEdit(params.row.id)}
                            className="editbtn"
                        >
                            <ModeEditIcon />
                        </p>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <p
                            onClick={() => handleDelete(params.row.id)}
                            className="deletebtn"
                        >
                            <DeleteIcon />
                        </p>
                    </Tooltip>
                </Stack>
            ),
        },
    ];
    const handleEdit = (task_id) => {
        navigate(`/tasks/edit/${task_id}`)
    };

    const handleDelete = (task_id) => {
        apiClient.delete(`/tasks/${task_id}/`)
            .then(() => {
                dispatch(taskListThunk());
            })
            .catch(error => {
                console.error('Error deleting task: ', error);
            });
    };

    return (
        <List>
            {tasks && (
                <DataGrid
                    rows={tasks}
                    columns={columns}
                    width="100%"
                    pagination={false}
                />
            )}
        </List>
    );
};

export default TaskList;
