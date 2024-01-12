import React from 'react';
import {Project} from "../../api/project";
import styled from "styled-components";
// @ts-ignore
import projectThumbnail from "../../assets/project-thumbnail.png"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";

type Props = {
    project: Project
}

const ProjectComponent: React.FC<Props> = (props: Props) => {

    const navigate = useNavigate()

    const navigateToProjectItemPage = () => {
        navigate(`/projects/${props.project.id}`)
    }

    return (
        <ProjectContainer>
            <Thumbnail
                src={projectThumbnail}
                alt={`Project thumbnail for project ${props.project.name}`}
                onClick={navigateToProjectItemPage}
            />
            <DescriptionAndActionButtonsContainer>
                <Box>
                    <Typography variant="h6">
                        {props.project.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "grey" }}>
                        {props.project.technologiesUsed}
                    </Typography>
                </Box>
            </DescriptionAndActionButtonsContainer>
        </ProjectContainer>
    )
}

const ProjectContainer = styled.div`
  display: grid;
  grid-gap: var(--space-4);
`
const Thumbnail = styled.img`
  width: 500px;
  object-fit: cover;
  border-radius: var(--space-3);
  box-shadow: 0 0 15px #bdbdbd;
  &:hover {
    transform: scale(1.004);
    cursor: pointer;
  }
  @media screen and (max-width: 900px){
    width: 100%;
  }
`
const DescriptionAndActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--space-3);
  padding: 0 var(--space-2);
`
export default ProjectComponent
