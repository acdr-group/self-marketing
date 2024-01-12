import {SxProps} from "@mui/material";

export const CenteredContent: SxProps = () => ({
    maxWidth: "var(--max-content-width)",
    margin: "0 auto",
    padding: "0 var(--space-5)",
})

export const CenteredSection : SxProps = () => ({
    display: "grid",
    gridGap: "var(--space-6)",
    justifyContent: "center",
    justifyItems: "center",
    margin: "var(--space-13) 0",
})

export const CenteredSectionTitle: SxProps = () => ({
    fontSize: "var(--font-3xlarge)",
    fontWeight: "bold",
    lineHeight: "var(--space-7)",
    maxWidth: {
        xs: "100%",
        sm: "100%",
        md: "60%",
        lg: "60%"
    },
    margin: "auto",
})

export const CenteredSectionDescription: SxProps = () => ({
    maxWidth: {
        xs: "100%",
        sm: "100%",
        md: "60%",
        lg: "60%"
    },
    margin: "auto"
})

export const CenteredSectionButtonsContainer: SxProps = () => ({
    display: "grid",
    justifyContent: "center",
    justifyItems: "center",
})

export const CardsContainer: SxProps = () => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "var(--space-7)",
    minWidth: 275,
    "@media screen and (max-width: 900px)": {
        gridTemplateColumns: "1fr",
    },
})
/* Media queries */
export const ShowOnlyOnLargeScreen = {
    xs: 'none',
    sm: 'none',
    md: 'none',
    lg: 'block',
}
export const ShowOnlyOnMobile= {
    xs: 'grid',
    sm: 'grid',
    md: 'grid',
    lg: 'none',
}

export const SectionButtonsContainer: SxProps = () => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "stretch",
    gap: "var(--space-4)",
    "@media screen and (max-width: 900px)": {
        flexDirection: "column",
    }
})