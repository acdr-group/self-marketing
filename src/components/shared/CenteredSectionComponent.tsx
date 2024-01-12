import React, {forwardRef} from 'react';
import {SectionType} from "./types/SectionType";
import Box from "@mui/material/Box";
import {
    CenteredContent,
    CenteredSection,
    CenteredSectionButtonsContainer,
    CenteredSectionDescription,
    CenteredSectionTitle
} from "../../sharedStyles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {SxProps} from "@mui/material";

type Props = SectionType & {}

const CenteredSectionComponent = forwardRef((props: Props, ref) => {
    return (
        <Box ref={ref}>
            <Box sx={CenteredContent}>
                <Box sx={CenteredSection}>
                    <Box sx={SectionHeaderContainer}>
                        <Typography sx={CenteredSectionTitle} align={"center"}>
                            {props.title}
                        </Typography>
                        <Typography align={"center"} sx={CenteredSectionDescription}>
                            {props.description}
                        </Typography>
                        <Box sx={CenteredSectionButtonsContainer}>
                            {props.sectionButtons?.map((button, idx) =>
                                <Button key={idx} {...button} size={"large"}>
                                    {button.label}
                                </Button>
                            )}
                        </Box>
                    </Box>
                    {props.children}
                </Box>
            </Box>
        </Box>
    )
})

const SectionHeaderContainer: SxProps = () => ({
    display: "grid",
    gridGap: "var(--space-4)",
})

export default CenteredSectionComponent
