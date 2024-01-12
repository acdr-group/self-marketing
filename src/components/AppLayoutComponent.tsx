import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NavBarComponent from "./NavBarComponent";
import FooterComponent from "./FooterComponent";
import {SxProps} from "@mui/material";
import {useCallback, useEffect} from "react";
import {useLocation} from "react-router-dom";

type Props = {
    children: any
}

const AppLayoutComponent: React.FC<Props> = (props: Props) => {

    const location = useLocation()

    useEffect(() => {
        scrollToToOfPage()
    }, [location])

    const scrollToToOfPage = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <Box>
            <NavBarComponent />
            <Box component="main" sx={MainContent}>
                <Toolbar />
                <Box>
                    {props.children}
                </Box>
            </Box>
            <FooterComponent />
        </Box>
    )
}

const MainContent: SxProps = () => ({
    minHeight: "100vh",
})

export default AppLayoutComponent