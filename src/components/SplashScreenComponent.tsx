import React from 'react';
import styled from "styled-components";
import {CircularProgress} from "@mui/material";

const SplashScreenComponent: React.FC = () => {
    return (
        <SplashScreenContainer>
            <SoftwareDetailsContainer>
                <DevToolBrand>dm Wetter-App</DevToolBrand>
                <SoftwareVersion>v1.0.0</SoftwareVersion>
            </SoftwareDetailsContainer>
            <SpinningCircularProgress/>
        </SplashScreenContainer>
    )
}

const SplashScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-gap: var(--space-8);
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  background-color: var(--color-primary);
  overflow: hidden;
  position: fixed;
`
const SoftwareDetailsContainer = styled.div`
  display: grid;
  grid-gap: var(--space-2);
  justify-items: center;
  color: var(--color-on-primary);
`
const DevToolBrand = styled.div`
  font-size: var(--font-3xlarge);
  color: var(--color-on-primary);
  font-weight: bold;
`
const SoftwareVersion = styled.div`
    font-size: var(--font-small);
`
const SpinningCircularProgress = styled(CircularProgress)`
    && {
      color: var(--color-on-primary);
    }
`

export default SplashScreenComponent
