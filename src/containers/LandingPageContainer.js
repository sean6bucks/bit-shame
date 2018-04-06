import React, { Component } from "react";
import LandingPage from "../components/LandingPage";

const styles = {
    width: "100%",
    maxWidth: 1000,
    margin: "0 auto",
    backgroundColor: "black"
};

class LandingPageContainer extends Component {
    render() {
        return (
            <div style={styles}>
                <LandingPage />
            </div>
        );
    }
}

export default LandingPageContainer;
