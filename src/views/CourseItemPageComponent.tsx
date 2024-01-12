import React, {useEffect, useRef, useState} from 'react';
import Box from "@mui/material/Box";
import HeroSectionComponent from "../components/shared/HeroSectionComponent";
import ButtonType from "../components/shared/types/ButtonType";
import {getTasksByCourseIdAPI, Task} from "../api/task";
// @ts-ignore
import pageHeroSectionImage from "../assets/vs-code-light.png";
import CenteredSectionComponent from "../components/shared/CenteredSectionComponent";
import TaskListComponent from "../components/shared/TaskListComponent";
import {useParams} from "react-router-dom";
import {Course, getCourseByIdAPI} from "../api/course";
import {validate} from "uuid";
import LoadingComponent from "../components/shared/LoadingComponent";
import {scrollToNode} from "../helpers/scroll";

const CourseItemPageComponent: React.FC = () => {

    const { courseId } = useParams<{ courseId: string }>()

    const [course, setCourse] = useState<Course | undefined>(undefined);

    const [tasks, setTasks] = useState<Task[] | undefined>(undefined);

    const tasksRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        loadCourse().then(data => setCourse(data));
        getTasksByCourseIdAPI(courseId!).then(data => setTasks(data));
    }, [courseId])

    const loadCourse = async (): Promise<Course> => {
        if (!validate(courseId!)) {
            console.log("The course id you provided is not a valid uuid")
            return Promise.reject()
        }
        return await getCourseByIdAPI(courseId!)
    }

    const heroSectionButtons: ButtonType[] = [
        {
            label: "Zu den Aufgaben",
            variant: "contained",
            onClick: () => scrollToNode(tasksRef.current)
        },
    ]

    if (course === undefined || tasks === undefined) {
        return (
            <LoadingComponent
                text={"Loading course..."}
                sx={{
                    mt: "var(--space-14)",
                }}
            />
        )
    }

    return (
        <Box>
            <HeroSectionComponent
                title={course.name}
                subtitle={course.codeName}
                description={course.description!}
                sectionButtons={heroSectionButtons}
                image={pageHeroSectionImage}
                darkMode
            />
            <CenteredSectionComponent
                ref={tasksRef}
                title={"Aufgaben"}
                description={`Alle Aufgaben zu ${course.name}. Die Aufgaben befassen sich mit dem systematischen Entwurf, der Entwicklung, dem Testen und der Wartung von Softwareanwendungen.`}
            ><TaskListComponent tasks={tasks} />
            </CenteredSectionComponent>

        </Box>
    )
}
export default CourseItemPageComponent
