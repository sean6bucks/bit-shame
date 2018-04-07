import React from "react";
import styled from "styled-components";

import { RoundButton, colors } from "../globals";

const StyledListItem = styled.p`
    margin: 20px 0;
    color: ${colors.lightGrey};
`;

const RejectedResults = ({ handleTryAgain }) => {
    return (
        <div style={{ padding: 100 }}>
            <h1
                style={{
                    fontSize: 40,
                    marginBottom: 40,
                    lineHeight: "40px",
                    maxWidth: 600
                }}
            >
                Shame on you! We didnt found any shamish in your photo. Try
                again.
            </h1>
            <div style={{ paddingLeft: 100, marginBottom: 50 }}>
                <h5
                    style={{
                        display: "inline-block",
                        padding: "3px 2px 0px",
                        margin: "20px 0",
                        backgroundColor: colors.purple
                    }}
                >
                    TIPS TO TRY
                </h5>
                <StyledListItem>1. STUPID FACE</StyledListItem>
                <StyledListItem>2. TAKE OFF YOUR CLOTHES</StyledListItem>
                <StyledListItem>3. DRINK MORE AND THINK AGAIN</StyledListItem>
            </div>
            <RoundButton
                label="Try Again"
                backgroundColor={colors.purple}
                labelColor={colors.white}
                labelStyle={{ fontSize: 18, padding: 30 }}
                onClick={handleTryAgain}
            />
        </div>
    );
};

export default RejectedResults;
