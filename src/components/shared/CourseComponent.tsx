import React from 'react';
import {useNavigate} from "react-router-dom";
import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Course} from "../../api/course";

type Props = {
    course: Course
}

const CourseComponent: React.FC<Props> = (props: Props) => {
    const navigate = useNavigate()

    const navigateToProjects = () => {
        navigate(`/courses/${props.course.id}`)
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
                    {props.course.name}
                </Typography>
                <Typography sx={{ mb: 1.5, color: "grey" }} variant="subtitle2">
                    {props.course.codeName.toUpperCase()}
                </Typography>
                <Typography variant="body2">
                    {props.course.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={navigateToProjects}
                >
                    Mehr erfahren
                </Button>
            </CardActions>
        </Card>
    )
}

export default CourseComponent
