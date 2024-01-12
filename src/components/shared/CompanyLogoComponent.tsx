import React from 'react';
// @ts-ignore
import logo from "../../assets/dm-logo.png"
import styled from "styled-components";

export const CompanyLogoComponent: React.FC = () => {
    return (
        <IconComponent
            src={logo}
            alt={"Company logo"}
        />
    )
}

const IconComponent = styled.img`
    max-width: 50px;
    object-fit: cover;
    justify-self: end;
`