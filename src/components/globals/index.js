import React from "react";

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
        <div style={{ ...style, width: "100%" }}>
            <img
                src={src}
                style={{ width: "100%", height: "auto", verticalAlign: "top" }}
            />
        </div>
    );
};
