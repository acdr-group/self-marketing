import React from 'react';
import Box from "@mui/material/Box";
import {SxProps, Theme} from "@mui/material";
import {CenteredContent} from "../sharedStyles";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import {CompanyLogoComponent} from "./shared/CompanyLogoComponent";


const FooterComponent: React.FC = () => {
    return (
        <Box sx={FooterContainer}>
            <Box sx={CenteredContent}>
                <FooterContentWrapper>
                    <Box sx={{ display: "grid", gap: 3 }}>
                        <Box sx={{ display: "flex", gap: 2, flex: 1, alignSelf: "flex-start" }}>
                            <CompanyLogoComponent />
                            <Typography variant={"h6"}>Wetter</Typography>
                        </Box>
                        <Box sx={{ display: "grid", gap: 1 }}>
                            <Typography variant="subtitle2">
                                Diese Software wurde von einer Gruppe von Studenten für dmTECH im Rahmen des Faches AWP an der Hochschule Karlsruhe entwickelt.
                            </Typography>
                            <Typography variant="subtitle2" color="primary">
                                © {new Date().getFullYear()} ACDR Group. Alle Rechte vorbehalten
                            </Typography>
                        </Box>
                    </Box>
                </FooterContentWrapper>
            </Box>
        </Box>
    )
}
const FooterContainer: SxProps = () => ({
    backgroundColor: "var(--color-on-primary)",
    padding: "var(--space-7) 0",
    marginTop: "var(--space-12)",
    borderTop: "1px solid var(--color-light-grey)",
})
const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: var(--space-5);

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

export default FooterComponent
