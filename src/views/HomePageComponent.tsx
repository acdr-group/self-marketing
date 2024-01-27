import React, {useRef} from 'react';
import Box from "@mui/material/Box";
import HeroSectionComponent from "../components/shared/HeroSectionComponent";
import OrdinarySectionComponent from "../components/shared/OrdinarySectionComponent";
import ButtonType from "../components/shared/types/ButtonType";
import CenteredSectionComponent from "../components/shared/CenteredSectionComponent";
import {useNavigate} from "react-router-dom";
import StepsAccordion from "../components/StepsAccordionComponent";
import {scrollToNode} from "../helpers/scroll";
import {heroSection, howItWorksSection, sections, steps} from "../data/homepage";
import {Step as StepType} from "../components/shared/types/Step";
import Typography from "@mui/material/Typography";
// @ts-ignore
import qrCodeIos from "../assets/qrcode-ios.png"
// @ts-ignore
import qrCodeAndroid from "../assets/qrcode-android.png"
// @ts-ignore
import devicePic from "../assets/devices.png"
import styled from "styled-components";

const HomePageComponent: React.FC = () => {

    const navigate = useNavigate()

    const refHowItWorksSection = useRef<HTMLDivElement | null>(null)


    const heroSectionButtons: ButtonType[] = [
        {label: "Zur Demo der Web-App", variant: "contained", onClick: () => window.open(process.env.REACT_APP_WEB_APP_URL!, "_blank")},
        {label: "App Herunterladen", variant: "outlined", onClick: () => scrollToNode(refHowItWorksSection.current)},
    ]

    const steps: StepType[] = [
        {
            title: "expo go",
            subtitle: "1. Lade die Expo Go App herunter",
            description: <Typography>Im AppStore oder Play store suche nach "<code style={{ color: "var(--color-primary)" }}>Expo Go</code>" und lade die App herunter</Typography>,
        },
        {
            title: "iOS",
            subtitle: <div>2. Hol dir die Demo-App für iOS <b>(Nur für iOS-Geräte)</b></div>,
            description: <Box sx={{ display: "grid", gap: 2 }}>
                <div>Gib die folgende URL in der Expo Go App ein oder scanne den QR-Code mit der Kamera oder der Expo Go App</div>
                <Typography color="primary" variant="h6">exp://u.expo.dev/update/c068c4a8-674e-4ae8-a0af-c41ca73f3c7d</Typography>
                <QrCodeComponent src={qrCodeIos} alt={"qr-code for iOS"}/>
            </Box>,
        },
        {
            title: "android",
            subtitle: <div>3. Hol dir die Demo-App für Android <b>(Nur für Android-Gerät)</b></div>,
            description: <Box sx={{ display: "grid", gap: 2 }}>
                <div>Gib die folgende URL in der Expo Go App ein oder scanne den QR-Code mit der Kamera oder der Expo Go App</div>
                <Typography color="primary" variant="h6">exp://u.expo.dev/update/11709675-b25b-4af3-b40d-e903c0534797</Typography>
                <QrCodeComponent src={qrCodeAndroid} alt={"qr-code for iOS"}/>
            </Box>,
        },
    ]

    const resolveSectionBackground = (index: number) => index % 2 === 0 ? "var(--color-black)" : "white"

    return (
        <Box sx={{ pb: 2 }}>
            <HeroSectionComponent
                title={heroSection.title}
                description={heroSection.description}
                sectionButtons={heroSectionButtons}
                image={heroSection.image}
            />
            {sections.map((section, idx) =>
                <Box key={section.title} sx={{ backgroundColor:  resolveSectionBackground(idx) }}>
                    <OrdinarySectionComponent
                        {...section}
                        isDark={resolveSectionBackground(idx) !== "white"}
                        reverseGridItemsOrder={idx % 2 === 0}
                    />
                </Box>
            )}
            <CenteredSectionComponent
                ref={refHowItWorksSection}
                title={howItWorksSection.title}
                description={howItWorksSection.description}
            >
                <DevicesComponent src={devicePic} alt="devices" />
                <StepsAccordion steps={steps}/>
            </CenteredSectionComponent>
        </Box>
    )
}

const DevicesComponent = styled.img`
    max-width: 300px;
    object-fit: cover;
`

const QrCodeComponent = styled.img`
    box-shadow: 0 0 var(--space-4) grey;
    border-radius: var(--space-4);
    max-width: 300px;
    object-fit: cover;
`

export default HomePageComponent
