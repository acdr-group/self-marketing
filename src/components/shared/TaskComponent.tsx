import React, {useEffect, useState} from "react";
import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Task} from "../../api/task";
import {useNavigate} from "react-router-dom";
import {Course, getCourseByIdAPI} from "../../api/course";
import LoadingComponent from "./LoadingComponent";

type PropsTaskComponent = {
    task: Task
}

const TaskComponent: React.FC<PropsTaskComponent> = (props: PropsTaskComponent) => {

    const navigate = useNavigate()

    const [course, setCourse] = useState<Course | undefined>(undefined);

    useEffect(() => {
        loadCourse().then(data => setCourse(data));
    }, [props.task])

    const loadCourse = async () => {
        return await getCourseByIdAPI(props.task.courseId)
    }

    const navigateToProjects = () => {
        navigate(`/tasks/${props.task.id}`)
    }

    if (course === undefined) {
        return (
            <LoadingComponent
                text={"Loading task..."}
                sx={{
                    mt: "var(--space-13)",
                }}
            />
        )
    }

    return (
        <Card
            variant={"outlined"}
            elevation={24}
            sx={{
                p: 1,
                "&:hover": {
                    boxShadow: "0 0 10px var(--color-primary)",
                },
            }}
        >
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.task.title}
                </Typography>
                <Typography sx={{ mb: 1.5, color: "grey" }} variant="subtitle2">
                    {course.codeName.toUpperCase()}
                </Typography>
                <Typography variant="body2">
                    {props.task.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={navigateToProjects}>
                    Mehr erfahren
                </Button>
            </CardActions>
        </Card>
    )
}

export default TaskComponent