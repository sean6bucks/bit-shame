import React, { Component } from "react";

// components
import RejectedResults from "../components/RejectedResults";
import OfferResults from "../components/OfferResults";

const endpoint = "http://something";

class ResultsContainer extends Component {
    tryUploadAgain = () => {
        this.props.setStep("upload");
    };

    acceptOffer = walletId => {
        // TODO: FINISH
        const { accessToken, offer: { amount } } = this.props;
        console.log(accessToken, amount);
        this.props.handleAcceptOffer(walletId);
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
                handleAccept={this.acceptOffer}
            />
        );
    }
}

export default ResultsContainer;
