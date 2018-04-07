import React from "react";
import styled from "styled-components";
import { Image } from "../globals";

const CenteredDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

const Success = ({ transactionId, handleRestart }) => {
    return (
        <CenteredDiv>
            <h1 style={{ fontSize: 50 }}>SUCCESS!</h1>
            <Image
                style={{ width: 500, margin: 100 }}
                src={
                    "https://media.giphy.com/media/9oI5G6REU1NIVsZf4G/source.gif"
                }
            />
            <h1>transaction ID: {transactionId}</h1>
        </CenteredDiv>
    );
};

export default Success;
