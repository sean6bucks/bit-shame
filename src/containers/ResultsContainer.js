import React, { Component } from "react";

// components
import RejectedResults from "../components/RejectedResults";
import OfferResults from "../components/OfferResults";

const endpoint = "http://something";

class ResultsContainer extends Component {
    state = {
        walletId: ""
    };

    tryUploadAgain = () => {
        this.props.setStep("upload");
    };

    updateInput = value => {
        this.setState({
            walletId: value
        });
    };

    acceptOffer = () => {
        // TODO: FINISH
        const { accessToken, offer: { amount } } = this.props;
        this.props.handleAcceptOffer(this.state.walletId);
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
                handleChange={this.updateInput}
                handleTryAgain={this.tryUploadAgain}
                handleAccept={this.acceptOffer}
            />
        );
    }
}

export default ResultsContainer;
