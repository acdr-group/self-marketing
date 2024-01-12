import React from 'react';
import Box from "@mui/material/Box";
import {CardsContainer} from "../../sharedStyles";
import {Course} from "../../api/course";
import CourseComponent from "./CourseComponent";

type Props = {
    courses: Course[]
}

const CourseListComponent: React.FC<Props> = (props: Props) => {
    return (
        <Box sx={CardsContainer}>
            {props.courses.map((course, idx) =>
                <CourseComponent
                    key={idx}
                    course={course}
                />
            )}
        </Box>
    )
}

export default CourseListComponent
