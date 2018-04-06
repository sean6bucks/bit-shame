import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import styled, { keyframes } from "styled-components";

export const Header = ({ children }) => {
    return (
        <div style={{ width: "100%", height: 50, padding: 10 }}>{children}</div>
    );
};

export const Container = ({ style, children }) => {
    return (
        <div
            style={{
                ...style,
                width: "100%",
                padding: "30px 15px"
            }}
        >
            {children}
        </div>
    );
};

export const Image = ({ style, src }) => {
    return (
        <div style={{ display: "inline-block", width: "100%", ...style }}>
            <img
                alt={src + "_img"}
                src={src}
                style={{ width: "100%", height: "auto", verticalAlign: "top" }}
            />
        </div>
    );
};

export const RoundButton = props => {
    const rounded = { borderRadius: 16 };
    return <RaisedButton {...props} style={rounded} buttonStyle={rounded} />;
};

export const Spinner = () => {
    const rotate = keyframes`
        to {transform: rotate(360deg);}
    `;
    const StyledSpinner = styled.div`
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80px;
        height: 80px;
        margin-top: -40px;
        margin-left: -40px;
        border-radius: 50%;
        border-top: 4px solid ${colors.purple};
        border-right: 4px solid transparent;
        animation: ${rotate} .5s linear infinite;
        }
    `;

    return <StyledSpinner />;
};

export const colors = {
    white: "#FFFFFF",
    purple: "#512DA8",
    lightGrey: "#C9C9C9",
    darkGrey: "#7f7f7f"
};
