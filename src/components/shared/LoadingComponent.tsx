import React from 'react';
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from "@mui/material/Typography";
import {SxProps} from "@mui/material";

type Props = {
    text: string
    children?: any
    sx?: SxProps
}

const LoadingComponent: React.FC<Props> = (props: Props) => {
    return (
        <Box sx={props.sx}>
            <Box sx={LoadingComponentContent}>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
                <Typography sx={{ color: "grey" }}>{props.text}</Typography>
                <Box>{props.children}</Box>
            </Box>
        </Box>
    )
}

const LoadingComponentContent: SxProps = () => ({
    display: "grid",
    gridGap: "var(--space-4)",
    justifyContent: "center",
    justifyItems: "center",
})

export default LoadingComponent
