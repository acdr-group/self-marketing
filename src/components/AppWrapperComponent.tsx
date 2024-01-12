import React, {useEffect, useState} from 'react';
import SplashScreenComponent from "./SplashScreenComponent";
import AppLayoutComponent from "./AppLayoutComponent";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import HomePageComponent from "../views/HomePageComponent";
import CourseItemPageComponent from "../views/CourseItemPageComponent";
import TaskItemPageComponent from "../views/TaskItemPageComponent";
import ProjectItemPageComponent from "../views/ProjectItemPageComponent";
import CourseListPageComponent from "../views/CourseListPageComponent";
import TaskListPageComponent from "../views/TaskListPageComponent";
import ProjectListPageComponent from "../views/ProjectListPageComponent";
import Box from "@mui/material/Box";
import {customTheme} from "../theme";
import {ThemeProvider} from "@mui/material";

const AppWrapperComponent: React.FC = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setIsLoading(!isLoading)
    }, [])

    if (isLoading) return <SplashScreenComponent/>

    return (
        <ThemeProvider theme={customTheme}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <AppLayoutComponent>
                    <Routes>
                        <Route path={"/"} Component={Redirect} />
                        <Route path={"/home"} Component={HomePageComponent} />
                    </Routes>
                </AppLayoutComponent>
            </BrowserRouter>
        </ThemeProvider>
    )
}

const Redirect: React.FC = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/home")
    }, [])

    return (
        <Box>
            Redirecting to /home ....
        </Box>
    )
}

export default AppWrapperComponent;
