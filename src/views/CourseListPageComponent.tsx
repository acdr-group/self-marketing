import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import CenteredSectionComponent from "../components/shared/CenteredSectionComponent";
import {Course, getAllCoursesAPI} from "../api/course";
import CourseListComponent from "../components/shared/CourseListComponent";
import LoadingComponent from "../components/shared/LoadingComponent";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import ButtonType from "../components/shared/types/ButtonType";
import {mainSection, moreTaskSection, newSubjectEmailRequest} from "../data/courseListPage";

const CourseListPageComponent: React.FC = () => {

    const [courses, setCourses] = useState<Course[] | undefined>(undefined);

    useEffect(() => {
        getAllCoursesAPI().then(data => setCourses(data));
    }, [])

    const sectionButtons: ButtonType[] = [
        {
            label: "Neues Fach anfragen",
            variant: "contained",
            endIcon: <AttachEmailIcon />,
            onClick: () => window.location.href = newSubjectEmailRequest,
        },
    ]

    if (courses === undefined) {
        return (
            <LoadingComponent
                text={"Loading courses..."}
                sx={{
                    mt: "var(--space-14)",
                }}
            />
        )
    }

    return (
        <Box>
            <CenteredSectionComponent title={mainSection.title} description={mainSection.description}>
                <CourseListComponent courses={courses} />
            </CenteredSectionComponent>
            <CenteredSectionComponent
                title={moreTaskSection.title}
                description={moreTaskSection.description}
                sectionButtons={sectionButtons}
            />
        </Box>
    )
}
export default CourseListPageComponent
