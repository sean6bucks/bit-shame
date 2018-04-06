import React, { Component } from "react";
import { Container, Image } from "../components/globals";
import LoanContainer from "./LoanContainer";

const styles = {
    width: "100%",
    maxWidth: 800,
    margin: "0 auto",
    padding: "100px 50px",
    backgroundColor: "black"
};

class LandingPageContainer extends Component {
    render() {
        return (
            <div style={styles}>
                <Container />
                <LoanContainer />
            </div>
        );
    }
}

export default LandingPageContainer;
