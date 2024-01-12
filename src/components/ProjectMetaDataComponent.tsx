import React from 'react';
import Typography from "@mui/material/Typography";
import {Avatar} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {MetaData} from "./shared/types/metaData";
import styled from "styled-components";

type Props = {
    metaData: MetaData
    navigateToLivePreview: () => void
    requestProject: () => void
}
const ProjectMetaDataComponent: React.FC<Props> = (props: Props) => {
    const { metaData } = props
    return (
        <DetailsContainer>
            <Typography variant={"h6"} sx={{ mb: 1, fontWeight: "bold" }}>Project metadaten</Typography>
            <AuthorContainer>
                <AvatarWrapper>
                    <Avatar {...stringAvatar(metaData.author)} />
                    <Box>
                        <Typography variant={"subtitle2"} sx={{ mb: -1, color: "grey" }}>
                            Erstellt von
                        </Typography>
                        <Typography variant={"subtitle1"} sx={{ textTransform: "capitalize" }}>
                            {metaData.author}
                        </Typography>
                    </Box>
                </AvatarWrapper>
            </AuthorContainer>
            <ReleaseInfoContainer>
                <Typography variant={"subtitle1"} sx={{ mb: 2, color: "grey" }}>Release Information</Typography>
                {Object.entries(metaData.releaseInfo).map((entry, index: number) =>
                    <ReleaseInfoItem key={index}>
                        <Box sx={{ color: "grey" }}>{entry[0]}</Box>
                        <Box>{entry[1]}</Box>
                    </ReleaseInfoItem>
                )}
            </ReleaseInfoContainer>
            <ButtonsContainer>
                <Button
                    variant={"contained"}
                    sx={{ width: "100%", textTransform: "capitalize" }}
                    onClick={props.requestProject}
                >
                    Projekt anfragen
                </Button>
                <Button
                    variant={"outlined"}
                    sx={{ width: "100%", textTransform: "capitalize" }}
                    onClick={props.navigateToLivePreview}
                >
                    Live-Vorschau
                </Button>
            </ButtonsContainer>
        </DetailsContainer>
    )
}
const stringAvatar = (name: string) => {
    const formattedName = name.toUpperCase()
    return {
        sx: {
            width: 56,
            height: 56,
        },
        children: `${formattedName.split(' ')[0][0]}${formattedName.split(' ')[1][0]!}`,
    };
}

const DetailsContainer = styled.div`
  display: grid;
  grid-gap: var(--space-3);
  align-content: start;
  align-items: start;
  margin-top: var(--space-10);
`
const ButtonsContainer = styled.div`
  display: grid;
  align-items: start;
  align-content: start;
  grid-gap: var(--space-4);
`
const AuthorContainer = styled.div`
  margin-bottom: var(--space-6);
`
const AvatarWrapper = styled.div`
  display: grid;
  grid-gap: var(--space-4);
  grid-template-columns: auto 1fr;
  align-items: center;
  align-content: center;
`
const ReleaseInfoContainer = styled.div`
  display: grid;
`
const ReleaseInfoItem = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-content: center;
  align-items: center;
  padding: var(--space-5) var(--space-4);
  text-transform: capitalize;
  border-top: 1px solid var(--color-light-grey);
  font-size: var(--font-small);
`
export default ProjectMetaDataComponent
