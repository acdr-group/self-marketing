import React, {useEffect, useState} from 'react';
import ProjectMarkdown from "../markdowns/project.mdx"
import Box from "@mui/material/Box";
import {CenteredContent} from "../sharedStyles";
import {MDXProvider} from "@mdx-js/react";
// @ts-ignore
import projectThumbnail from "../assets/project-thumbnail.png"
import {metaData} from "../data/projectItemPage";
import ProjectMetaDataComponent from "../components/ProjectMetaDataComponent";
import styled from "styled-components";
import {getProjectByIdAPI, Project} from "../api/project";
import {useParams, useSearchParams} from "react-router-dom";
import LoadingComponent from "../components/shared/LoadingComponent";
import RequestProjectModalComponent from "../components/shared/RequestProjectModalComponent";
import {ParamKeyValuePair} from "react-router-dom/dist/dom";
import {ProjectRequestType} from "../components/shared/types/projectRequest";

const ProjectItemPageComponent: React.FC = () => {

    const { projectId } = useParams<{ projectId: string }>()

    const [project, setProject] = useState<Project | undefined>(undefined)

    const [isRequestProjectModalOpen, setIsRequestProjectModalOpen] = useState<boolean>(false)

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        getProjectByIdAPI(projectId!).then(project => setProject(project))
    }, [projectId])

    useEffect(() => {
        setIsRequestProjectModalOpen(searchParams.get("request_project") === "true")
    }, [projectId, searchParams])

    const openRequestProjectModal = () => {
        const params: ParamKeyValuePair[] = [
            ["request_project", "true"],
        ]
        setSearchParams(params)
    }

    const printProjectRequest = (data: ProjectRequestType) => {
        console.log(data)
    }

    const navigateToPreview = () => {
        window.open(project?.previewUrl, "_blank")
    }

    const closeRequestProjectModal = () => setSearchParams([])

    if (project === undefined)
        return <LoadingComponent
            text={"Loading project..."}
            sx={{
                mt: "var(--space-13)",
            }}
        />

    return (
        <Box sx={{ pt: "var(--space-7)" }}>
            <Box sx={CenteredContent}>
                <ProjectDetailContainer>
                    <Box>
                        <MDXProvider>
                            <ProjectMarkdown
                                project={project}
                                projectThumbnail={<ImageItem src={project.thumbnail}/>}
                            />
                        </MDXProvider>
                    </Box>
                    <ProjectMetaDataComponent
                        metaData={metaData}
                        requestProject={openRequestProjectModal}
                        navigateToLivePreview={navigateToPreview}
                    />
                </ProjectDetailContainer>
            </Box>
            <RequestProjectModalComponent
                open={isRequestProjectModalOpen}
                onSave={printProjectRequest}
                onClose={closeRequestProjectModal}
            />
        </Box>
    )
}

const ProjectDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-gap: var(--space-9);

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`
const ImageItem = styled.img`
  width: 100%;
  //width: 300px;
  //height: 300px;
  object-fit: cover;
  border-radius: var(--space-3);
  box-shadow: 0 0 15px #bdbdbd;
  &:hover {
    transform: scale(1.005);
    cursor: pointer;
  }
`
export default ProjectItemPageComponent
