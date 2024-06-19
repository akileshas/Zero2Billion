import React from "react";
import styled from "styled-components";
import redirectLogo from '../../../Data/Images/redirect-up-arrow.png';
import { Link } from "react-router-dom";

const CardContainerDiv = styled.div`
    &:hover .gmtc-cc-cc-up-overlay-cont {
        background-color: var(--color-8597E1);
    }
`;

const OverlayContainerDiv = styled.div`
    background-color: ${props => props.stripColor};
`;

const GetMakersTurnCard = ({ number, title, description, imgScr, redirectUrl, stripColor }) => {
    return (
        <div className={`gmtc-cc-card gmtc-cc-card-${number}`}>
            <CardContainerDiv className="gmtc-cc-card-cont">
                <Link to={redirectUrl} className="gmtc-cc-cc-redirect">
                    <img src={redirectLogo} alt="" />
                </Link>
                <OverlayContainerDiv 
                    className="gmtc-cc-cc-up-overlay-cont"
                    stripColor={stripColor}
                >
                    <p className="gmtc-cc-cc-title">
                        {title}
                    </p>
                    <p className="gmtc-cc-cc-description">
                        {description}
                    </p>
                    <div className="gmtc-cc-cc-bg-img-cont">
                        <img src={imgScr} alt="" />
                    </div>
                </OverlayContainerDiv>
                <div className="gmtc-cc-cc-img-cont">
                    <img src={imgScr} alt="" />
                </div>
                <p className="gmtc-cc-cc-title">
                    {title}
                </p>
            </CardContainerDiv>
        </div>
    )
}

export default GetMakersTurnCard;