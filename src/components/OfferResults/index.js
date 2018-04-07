import React from "react";
import styled from "styled-components";

import { RoundButton, colors } from "../globals";
import { FlatButton } from "material-ui";

// {"id":"cec7d5bd-ca76-4fb8-a0a9-7bb478eaa860","amount":3,"friendsCount":811,"status":"OFFERED","faceMatches":true,"interestRate":7,"moderationLevels":["Explicit Nudity","Nudity"]}

const StyledFlexGrid = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
`;
const StyledMainBox = styled.div`
    flex: 2;
    background: ${colors.darkGrey};
    margin-right: 20px;
    padding: 65px 50px;
    height: 500px;
`;
const StyledSideBoxes = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;
`;
const StyledSideBox = styled.div`
    background: ${colors.darkGrey};
    height: 30%;
    padding: 46px 20px;
`;

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 40px 0;
    width: 100%;
`;
const StyledListItem = styled.li`
    font-size: 18px;
    font-family: "Roboto";
    color: ${colors.lightGrey};
    padding: 5px 0;
`;
const StyledItemValue = styled.span`
    color: inherit;
    float: right;
`;

const StyledInputBox = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    width: 100%;
`;

const StyledInput = styled.input`
    line-height: 20px;
    font-size: 18px;
    padding: 15px;
    flex: 1;
    border: 1px solid ${colors.lightGrey};
    border-radius: 10px;
    outline: none;
    color: ${colors.white};
    font-family: "Roboto";
    background: ${colors.darkGrey};
    &:focus {
        border: 1px solid ${colors.white};
    }
`;

const StyledLargeValue = styled.h1`
    text-align: center;
    color: ${colors.white};
    font-size: 40px;
    margin: 0;
    line-height: 40px;
`;
const StyledLargeLabel = styled.p`
    color: ${colors.lightGrey};
    text-align: center;
    font-family: "Roboto";
    font-size: 18px;
    margin: 0;
`;
const StyledValue = styled.h1`
    text-align: center;
    color: ${colors.white};
    font-size: 30px;
    margin: 10px 0 0 0;
    line-height: 30px;
`;
const StyledLabel = styled.p`
    color: ${colors.lightGrey};
    text-align: center;
    font-family: "Roboto";
    font-size: 14px;
    margin: 0;
`;
const MeterFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 800px;
`;
const MeterItem = styled.div`
    flex: 1;
    padding: 10px;
    height: 100px;
`;
const MeterFill = styled.div`
    width: 100%;
    height: 20px;
    border-radius: 10px;
    background: #666;
    overflow: hidden;
    position: relative;
`;
const ActiveFill = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 20px;
`;
const MeterLabel = styled.div`
    text-align: center;
    margin: 15px 0;
    color: ${colors.lightGrey};
    font-size: 14px;
`;

const OfferResults = ({
    amount,
    friendsCount,
    interestRate,
    handleTryAgain,
    handleAccept
}) => {
    return (
        <div
            style={{
                padding: 100,
                width: "100%",
                maxWidth: 1000,
                margin: "0 auto"
            }}
        >
            <h1
                style={{
                    color: colors.lightGrey,
                    fontSize: 40,
                    marginBottom: 10,
                    textAlign: "center"
                }}
            >
                You're shame score is
            </h1>
            <h1
                style={{
                    fontSize: 40,
                    marginBottom: 20,
                    textAlign: "center"
                }}
            >
                {interestRate < 10
                    ? "awesome"
                    : interestRate < 20 ? "good" : "lame"}
            </h1>
            <FlatButton
                label="HOW CAN I GET MORE SHAME"
                labelStyle={{
                    color: colors.purple,
                    textDecoration: "underline"
                }}
                style={{ margin: "20px 0" }}
            />
            <MeterFlex>
                <MeterItem>
                    <MeterFill>
                        <ActiveFill
                            style={{
                                backgroundColor: "#FF615C",
                                width: interestRate < 16 ? "100%" : "80%"
                            }}
                        />
                    </MeterFill>
                    <MeterLabel>Lame</MeterLabel>
                </MeterItem>
                <MeterItem>
                    <MeterFill>
                        <ActiveFill
                            style={{
                                backgroundColor: "#FFB217",
                                width:
                                    interestRate > 15
                                        ? 0
                                        : interestRate > 6 ? "50%" : "100%"
                            }}
                        />
                    </MeterFill>
                    <MeterLabel>Good</MeterLabel>
                </MeterItem>
                <MeterItem>
                    <MeterFill>
                        <ActiveFill
                            style={{
                                backgroundColor: "#00C88F",
                                width:
                                    interestRate > 6
                                        ? 0
                                        : interestRate > 2 ? "60%" : "90%"
                            }}
                        />
                    </MeterFill>
                    <MeterLabel>Awesome</MeterLabel>
                </MeterItem>
            </MeterFlex>
            <StyledFlexGrid>
                <StyledMainBox>
                    <h2>Your loan offer</h2>
                    <StyledList>
                        <StyledListItem>
                            Bitcoins<StyledItemValue>
                                {amount} ₿
                            </StyledItemValue>
                        </StyledListItem>
                        <StyledListItem>
                            Repayment<StyledItemValue>
                                {"1 year"}
                            </StyledItemValue>
                        </StyledListItem>
                        <StyledListItem>
                            Interest rate<StyledItemValue>
                                {interestRate + "%"}
                            </StyledItemValue>
                        </StyledListItem>
                        <StyledListItem
                            style={{ marginTop: 20, marginBottom: 20 }}
                        >
                            Total costs<StyledItemValue>
                                {Math.round(
                                    amount * (1 + interestRate / 100) * 100
                                ) / 100}{" "}
                                ₿
                            </StyledItemValue>
                        </StyledListItem>
                    </StyledList>
                    <StyledInputBox>
                        <StyledInput placeholder="Wallet number" />
                    </StyledInputBox>
                    <div style={{ textAlign: "center" }}>
                        <RoundButton
                            label="SEND THE BITCOINS"
                            backgroundColor={colors.purple}
                            labelColor={colors.white}
                            labelStyle={{
                                fontSize: 18,
                                padding: 30,
                                width: 400
                            }}
                            onClick={handleAccept}
                        />
                    </div>
                </StyledMainBox>
                <StyledSideBoxes>
                    <StyledSideBox>
                        <StyledLargeValue>{interestRate}%</StyledLargeValue>
                        <StyledLargeLabel>interest</StyledLargeLabel>
                    </StyledSideBox>
                    <StyledSideBox>
                        <StyledValue>{friendsCount}</StyledValue>
                        <StyledLabel>followers</StyledLabel>
                    </StyledSideBox>
                    <StyledSideBox>
                        <StyledValue>{100}%</StyledValue>
                        <StyledLabel>recognition</StyledLabel>
                    </StyledSideBox>
                </StyledSideBoxes>
            </StyledFlexGrid>
            <FlatButton
                label="TRY AGAIN"
                labelStyle={{
                    color: colors.purple,
                    textDecoration: "underline"
                }}
                style={{ marginTop: 20 }}
                onClick={handleTryAgain}
            />
        </div>
    );
};

export default OfferResults;
