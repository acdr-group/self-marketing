import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {getAllProjectsAPI, Project} from "../api/project";
import CenteredSectionComponent from "../components/shared/CenteredSectionComponent";
import ProjectListComponent from "../components/shared/ProjectListComponent";
import LoadingComponent from "../components/shared/LoadingComponent";
import {mainSection} from "../data/projectListPage";

const ProjectListPageComponent: React.FC = () => {

    const [projects, setProjects] = useState<Project[] | undefined>(undefined);

    useEffect(() => {
        getAllProjectsAPI().then(data => setProjects(data))
    }, [])

    if (projects === undefined) {
        return (
            <LoadingComponent
                text={"Loading projects..."}
                sx={{
                    mt: "var(--space-13)",
                }}
            />
        )
    }

    return (
        <Box>
            <CenteredSectionComponent title={mainSection.title} description={mainSection.description}>
                <ProjectListComponent projects={projects} />
            </CenteredSectionComponent>
        </Box>
    )
}
export default ProjectListPageComponent
