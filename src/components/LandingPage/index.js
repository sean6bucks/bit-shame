import React from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

import { Image, RoundButton, colors } from "../globals";

// containers
import LoanContainer from "../../containers/LoanContainer";

// static assets
import phones from "./images/header-image-phones@2x.png";
import arrow from "./images/arrow.png";

const StyledListItem = styled.p`
    margin: 20px 0;
    color: ${colors.lightGrey};
`;

const LandingPage = () => {
    return (
        <div>
            <div
                style={{
                    width: "100%",
                    maxWidth: 800,
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "200px 50px 0 50px"
                }}
            >
                <h1
                    style={{
                        fontSize: 50,
                        textAlign: "center",
                        marginBottom: 20
                    }}
                >
                    Put your social life in danger and get rich
                </h1>
                <RoundButton
                    label="LOAN BITCOINS NOW"
                    backgroundColor={colors.purple}
                    labelColor={colors.white}
                    labelStyle={{
                        fontSize: 18,
                        padding: 30,
                        width: 400
                    }}
                    onClick={() => {
                        scroll.scrollTo(815, { duration: 600 });
                    }}
                />
                <Image
                    style={{ marginTop: 100, marginLeft: 20 }}
                    src={phones}
                />
            </div>
            <div
                style={{
                    width: "100%",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "row",
                    padding: "150px 75px",
                    backgroundColor: "black",
                    position: "relative"
                }}
            >
                <div
                    style={{
                        flex: 1,
                        padding: "0 50px"
                    }}
                >
                    <h5
                        style={{
                            display: "inline-block",
                            padding: "3px 2px 0px",
                            margin: "20px 0",
                            backgroundColor: colors.purple
                        }}
                    >
                        ACT NOW AND SHAME LATER
                    </h5>
                    <h2
                        style={{ fontSize: 40, lineHeight: "50px", width: 475 }}
                    >
                        Bitshame will give you the lowish interest rate % if
                        you’ll take the risk
                    </h2>
                    <div style={{ paddingLeft: 50, marginTop: 50 }}>
                        <StyledListItem>
                            1. CONNECT WITH FACEBOOK or INSTAGRAM
                        </StyledListItem>
                        <StyledListItem>2. UPLOAD A SHAME PHOTO</StyledListItem>
                        <StyledListItem>
                            3. MORE SHAME = BETTER INTEREST RATES
                        </StyledListItem>
                    </div>
                </div>
                <LoanContainer
                    style={{
                        flex: 1,
                        width: 360
                    }}
                />
                <Image
                    src={arrow}
                    style={{
                        position: "absolute",
                        width: 64,
                        right: 460,
                        top: 495
                    }}
                />
            </div>
        </div>
    );
};

export default LandingPage;
