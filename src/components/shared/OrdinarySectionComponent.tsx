import React from 'react';
import {SectionType} from "./types/SectionType";
import Box from "@mui/material/Box";
import {CenteredContent} from "../../sharedStyles";
import {SxProps} from "@mui/material";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type Props = SectionType & {
    reverseGridItemsOrder?: boolean
    isDark: boolean
}

const OrdinarySectionComponent: React.FC<Props> = (props: Props) => {
    return (
        <Box sx={CenteredContent}>
            <Box sx={OrdinarySectionContent}>
                <Box sx={{...{
                        order: props.reverseGridItemsOrder ? 2 : "unset",
                        webkitOrder: props.reverseGridItemsOrder ? 2 : "unset"
                    }}}
                >
                    {props.subtitle ?
                        <Typography
                            sx={{
                                color: "var(--color-secondary)",
                                pb: 1,
                            }}
                            variant="body1"
                        >
                            {props.subtitle}
                        </Typography>
                        : null
                    }
                    <Typography sx={SectionTitle}>{props.title}</Typography>
                    <Typography
                        sx={{
                            color: props.isDark ? "var(--color-on-primary)" : "black"
                        }}
                    >
                        {props.description}
                    </Typography>
                    <Box sx={ButtonsContainer}>
                        {props.sectionButtons?.map((button, idx) =>
                            <Button key={idx} {...button}>{button.label}</Button>
                        )}
                    </Box>
                </Box>
                {props.image ? <SectionImage src={props.image} alt={"Home page section"}/> : null}
                {props.svgIcon === undefined ? props.svgIcon : null}
            </Box>
        </Box>
    )
}

const OrdinarySectionContent: SxProps = () => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    width: "100%",
    justifyContent: "stretch",
    gridGap: "var(--space-7)",
    maxWidth: "var(--max-content-width)",
    padding: "var(--space-13) 0",
    "@media screen and (max-width: 900px)": {
        gridTemplateColumns: "1fr",
        gridGap: "var(--space-9)",
    },
})
const ButtonsContainer: SxProps = () => ({
    display: "flex",
    gap: "var(--space-3)",
})
const SectionTitle: SxProps = () => ({
    fontSize: "var(--font-3xlarge)",
    fontWeight: "bold",
    lineHeight: "var(--space-7)",
    marginBottom: "var(--space-3)",
    color: "var(--color-primary)",
})
const SectionImage = styled.img`
  max-width: 500px;
  width: 100%;
  border-radius: var(--space-2);
  filter: drop-shadow(0px 0px 10px grey);
  
  @media screen and (max-width: 900px) {
    justify-self: center;
  }
`
export default OrdinarySectionComponent
