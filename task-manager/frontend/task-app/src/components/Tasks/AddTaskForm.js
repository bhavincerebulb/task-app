import React, { useEffect, useState } from 'react';
import { TextField, Button, Card, Grid, Container } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom/dist';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { taskDetailThunk } from '../../redux/Task/TaskThunk';
import Select from "react-select";
import FormikControl from '../Formik/FormikControl';

const StatusChoices = [
    { label: "Pending", value: "pending" },
    { label: "InProgress", value: "in_progress" },
    { label: "Completed", value: "completed" },
    { label: "Rejected", value: "rejected" },
];

const DropDownStyle = {
    valueContainer: (baseStyles, state) => ({
        ...baseStyles,
        // background: 'red',
        borderBlockStart: 20,
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected
            ? "#8f3988"
            : "white", // Set the background color for selected option
        color: "black",
        ":hover": {
            backgroundColor: "#ffe6fed0", // Set the background color for hover
        },
    }),

    control: (provided, state) => ({
        ...provided,
        // border: state.isFocused ? '20px solid #007bff' : '20px solid #ced4da', // Change border color on focus
        boxShadow: "none", // Remove default box-shadow
        borderRadius: "10px",
        borderColor: "rgba(224, 218, 218, 0.733)",
        background: "rgba(224, 218, 218, 0.733)",
    }),
    menuList: (provided, state) => ({
        background: "#white",
    }),
}
const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
})

const intialData = {
    title: "",
    description: "",
    status: "pending"
}
const TaskForm = ({ formType }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [initialValues, setInitialValues] = useState(intialData);
    const taskObject = useSelector(
        (state) => state.TaskReducer.taskObject
    );

    useEffect(() => {
        if (formType === "edit") {
            setInitialValues({ ...taskObject });
        }
    }, [taskObject])

    useEffect(() => { if (formType === "edit" && id) { dispatch(taskDetailThunk(id)) } }, [dispatch])

    const handleSubmit = (values, { resetForm }) => {
        if (formType === "edit") {
            axios.put(`http://localhost:8000/tasks/${id}/`, values)
                .then(response => {
                    navigate("/tasks")
                })
                .catch(error => {
                    console.error('Error adding task: ', error);
                });
        }
        else {
            axios.post(`http://localhost:8000/tasks/`, values)
                .then(response => {
                    navigate("/tasks")
                })
                .catch(error => {
                    console.error('Error adding task: ', error);
                });
        }
    };

    return (
        <>
            <div className='task-form'>
                <div item>
                    <h2>
                        Create Task
                    </h2>
                </div>
                <Container fluid className="general-form">

                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                        enableReinitialize
                    >
                        {({ values, setFieldValue }) => (
                            <Form>
                                <div className="input-field">
                                    <FormikControl
                                        className="form-control"
                                        control="input"
                                        label="Title:"
                                        name="title"
                                    />
                                </div>
                                <div className="input-field">
                                    <FormikControl
                                        control="textarea"
                                        label="Description:"
                                        name="description"
                                    />
                                </div>
                                <div className="input-field">
                                    {formType === "edit" && (<FormikControl
                                        control="select"
                                        label="Status:"
                                        name="status"
                                        options={StatusChoices}
                                    />)}
                                </div>
                                <Button type="submit" variant="contained" color="primary">Submit Task</Button>
                            </Form>)}
                    </Formik>
                </Container>
            </div>
        </>
    );
};

export default TaskForm;
