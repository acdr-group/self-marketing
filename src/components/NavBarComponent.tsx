import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {CenteredContent, ShowOnlyOnLargeScreen, ShowOnlyOnMobile} from "../sharedStyles";
import {SxProps} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import ButtonType from "./shared/types/ButtonType";
import {CompanyLogoComponent} from "./shared/CompanyLogoComponent";
import {Close} from "@mui/icons-material";

const drawerWidth = 240

const NavBarComponent: React.FC = () => {

    const navigate = useNavigate()

    const location = useLocation();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    }

    const isCurrentPath = (paths: string[]): boolean => {
        return paths.some(path => location.pathname
            .toLowerCase()
            .includes(path)
        )
    }

    const navigationStaticButtons: ButtonType[] = [
        {
            label: "Zur Demo",
            variant: isCurrentPath(["/home"]) ? "contained" : "text",
            onClick: () => window.open(process.env.REACT_APP_WEB_APP_URL!, "_blank")
        },
    ]

    const navigationPageSelectorButton: ButtonType[] = [

    ]

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <>
            <AppBar component="nav" sx={AppBarContainer}>
                <Toolbar sx={CenteredContent}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: ShowOnlyOnMobile }}
                    >
                        <MenuIcon sx={{ color: "black" }} />
                    </IconButton>
                    <Box sx={{ display: "flex", width: "var(--max-content-width)", alignItems: "center" }}>
                        <Box sx={{ display: "flex", gap: 2, flex: 1 }}>
                            <CompanyLogoComponent />
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, color: "black", borderBottom: "var(--color-light-grey)" }}
                            >
                                Wetter
                            </Typography>
                        </Box>
                        <Box sx={ButtonsContainer}>
                            {navigationStaticButtons.map((item, idx) => (
                                <Button key={idx} sx={NavbarButton}  {...item}>
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        //keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: ShowOnlyOnMobile,
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <DrawerOnMobile
                        drawerButtons={navigationStaticButtons}
                        handleDrawerToggle={handleDrawerToggle}
                    />
                </Drawer>
            </Box>
        </>
    )
}


type PropsDrawerOnMobile = {
    drawerButtons?: ButtonType[]
    handleDrawerToggle: () => void
}
const DrawerOnMobile: React.FC<PropsDrawerOnMobile> = (props: PropsDrawerOnMobile) => {
    return (
        <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, pr: 2 }}>
                <Typography variant="h6" sx={{ flex: 1, my: 2, mx: 2, color: "black", borderBottom: "var(--color-light-grey)" }}>
                    dm Wetter
                </Typography>
                <IconButton onClick={props.handleDrawerToggle}>
                    <Close color="primary" />
                </IconButton>
            </Box>
            <Divider />
            <List sx={{ mx: 1.5 }}>
                {props.drawerButtons?.map((item, idx) => (
                    <ListItem key={idx} disablePadding>
                        <ListItemButton
                            onClick={item.onClick}
                            selected={item.variant === "contained"}
                            sx={{
                                borderRadius: "var(--space-4)",
                            }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

const AppBarContainer: SxProps = () => ({
    //width: "100%",
    backgroundColor: "white",
})

const ButtonsContainer: SxProps = () => ({
    display:  ShowOnlyOnLargeScreen,
})

const NavbarButton: SxProps = () => ({
    marginLeft: "var(--space-4)",
    textTransform: "capitalize",
})
export default NavBarComponent
