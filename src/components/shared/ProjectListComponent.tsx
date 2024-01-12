import React, {forwardRef} from 'react';
import Box from "@mui/material/Box";
import {CardsContainer} from "../../sharedStyles";
import {Project} from "../../api/project";
import ProjectComponent from "./ProjectComponent";
import {SxProps} from "@mui/material";

type Props = {
    projects: Project[]
}

const ProjectListComponent = forwardRef((props: Props, ref) => {
    return (
        <Box ref={ref} sx={ProjectListWrapper}>
            <Box sx={CardsContainer}>
                {props.projects.map((project, idx) =>
                    <ProjectComponent
                        key={idx}
                        project={project}
                    />
                )}
            </Box>
        </Box>
    )
})

const ProjectListWrapper: SxProps = () => ({
    paddingTop: "var(--space-8)",
})
export default ProjectListComponent
