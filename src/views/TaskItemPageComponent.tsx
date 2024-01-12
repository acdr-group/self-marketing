import React, {useEffect, useRef, useState} from 'react';
import Box from "@mui/material/Box";
import CenteredSectionComponent from "../components/shared/CenteredSectionComponent";
import ButtonType from "../components/shared/types/ButtonType";
import ProjectListComponent from "../components/shared/ProjectListComponent";
import {getProjectsByTaskId, Project} from "../api/project";
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import {useParams} from "react-router-dom";
import {validate} from "uuid";
import {Course, getCourseByIdAPI} from "../api/course";
import {getTaskByIdAPI, Task} from "../api/task";
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LoadingComponent from "../components/shared/LoadingComponent";
import {scrollToNode} from "../helpers/scroll";
import {askProjectSection, newProjectMailTemplate} from "../data/taskItemPage";

const TaskItemPageComponent: React.FC = () => {

    const { taskId } = useParams<{ taskId: string }>()

    const [projects, setProjects] = useState<Project[]>([])

    const [task, setTask] = useState<Task | undefined>(undefined)

    const [course, setCourse] = useState<Course | undefined>(undefined)

    const refProjectList = useRef<HTMLElement | null>(null)

    useEffect(() => {
        loadTask().then(task => setTask(task))
        getProjectsByTaskId(taskId!).then(data => setProjects(data))
    }, [taskId])

    useEffect(() => {
        loadCourse().then(course => setCourse(course))
    }, [task])

    const loadTask = async (): Promise<Task> => {
        if (!validate(taskId!)) {
            console.log("the task id you provided is not a valid uuid")
            return Promise.reject()
        }
        return await getTaskByIdAPI(taskId!)
    }

    const loadCourse = async (): Promise<Course> => {
        if (task === undefined) {
            console.log("Task is not yet loaded")
        }
        return await getCourseByIdAPI(task?.courseId!)
    }

    const sectionButtons: ButtonType[] = [
        {
            label: "Einzigartiges Projekt anfragen",
            variant: "contained",
            endIcon: <AttachEmailIcon />,
            onClick: () => window.location.href = newProjectMailTemplate,
        },
    ]

    const mainSectionButtons: ButtonType[] = [
        {
            label: "Project durchsuchen",
            variant: "contained",
            endIcon: <ArrowDownwardOutlinedIcon />,
            onClick: () => scrollToNode(refProjectList.current),
        },
    ]

    if (projects === undefined || course === undefined || task === undefined) {
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
        <Box>
            <CenteredSectionComponent
                title={`${course.codeName.toUpperCase()}-Projekte über ${task.title.toLocaleUpperCase()}`}
                description={task.description!}
                sectionButtons={mainSectionButtons}
            ><ProjectListComponent ref={refProjectList} projects={projects}/>
            </CenteredSectionComponent>
            <CenteredSectionComponent
                title={askProjectSection.title}
                description={askProjectSection.description}
                sectionButtons={sectionButtons}
            />
        </Box>
    )
}
export default TaskItemPageComponent
