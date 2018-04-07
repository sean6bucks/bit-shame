import React, { Component } from "react";
import axios from "axios";

// components
import RejectedResults from "../components/RejectedResults";
import OfferResults from "../components/OfferResults";

class ResultsContainer extends Component {
    tryUploadAgain = () => {
        this.props.setStep("upload");
    };
    render() {
        const {
            offer: { status, moderationLevels, faceMatches, friendsCount }
        } = this.props;
        return status === "REJECTED" ? (
            <RejectedResults
                faceMatched={faceMatches}
                moderationLevels={moderationLevels}
                friendsCount={friendsCount}
                handleTryAgain={this.tryUploadAgain}
            />
        ) : (
            <OfferResults
                {...this.props.offer}
                handleTryAgain={this.tryUploadAgain}
            />
        );
    }
}

export default ResultsContainer;
