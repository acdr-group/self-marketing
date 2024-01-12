import React from 'react';
import {SxProps} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "styled-components";
import {CenteredContent, SectionButtonsContainer} from "../../sharedStyles";
import {SectionType} from "./types/SectionType";

type Props = SectionType & {
    darkMode?: boolean
}

const HeroSectionComponent: React.FC<Props> = (props: Props) => {
    return (
        <Box sx={{ backgroundColor: props.darkMode ? "#141A1F" : "inherited" }}>
            <Box sx={CenteredContent}>
                <Box sx={HeroSectionContent}>
                    <Box sx={TextBlockContainer}>
                        {props.subtitle ?
                            <Typography
                                sx={{ color: props.darkMode ? "var(--color-primary)" : "inherited" }}
                            >
                                {props.subtitle.toUpperCase()}
                            </Typography> : null
                        }
                        <SectionTitle color={"var(--color-primary)"}>
                            {props.title}
                        </SectionTitle>
                        <Typography sx={{ color: props.darkMode ? "var(--color-on-primary)" : "inherited" }}>
                            {props.description}
                        </Typography>
                        <Box sx={SectionButtonsContainer}>
                            {props.sectionButtons?.map((button, idx) =>
                                <Button key={idx} {...button} size="large">{button.label}</Button>
                            )}
                        </Box>
                    </Box>
                    <Box sx={{ justifySelf: "center" }}>
                        {props?.image ? <SectionImage src={props.image} alt={"Hero section image"}/> : null}
                        {props.children ? props.children : null}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

const HeroSectionContent: SxProps = () => ({
    display: "grid",
    gridTemplateColumns: "4fr max-content",
    alignItems: "center",
    justifyContent: "stretch",
    gridGap: "var(--space-7)",
    padding: "var(--space-13) 0",
    "@media screen and (max-width: 980px)": {
        gridTemplateColumns: "1fr",
        gridGap: "var(--space-9)",
    },

})
const TextBlockContainer: SxProps = () => ({
    display: "grid",
    gridGap: "var(--space-4)",
    "@media screen and (max-width: 900px)": {
        textAlign: "center",
    }
})
const SectionTitle = styled.div<{color: string}>`
  font-size: calc(1.1 * var(--font-4xlarge));
  font-weight: bolder;
  line-height: var(--space-8);
  color: ${props => props.color};
`
const SectionImage = styled.img`
  max-width: 600px;
  object-fit: cover;
  justify-self: end;

  box-shadow: 0 0 var(--space-4) grey;
  border-radius: var(--space-2);

  @media screen and (max-width: 980px) {
    justify-self: center;
    width: 100%;
  }
`
export default HeroSectionComponent
