import React, { Component } from "react";
import axios from "axios";
import { Card } from "material-ui/Card";
import FullscreenDialog from "material-ui-fullscreen-dialog";

// containers
import ImageUploadContainer from "./ImageUploadContainer";
import ResultsContainer from "./ResultsContainer";

// components
import LoanForm from "../components/LoanForm";
import Success from "../components/Success";
import { Spinner } from "../components/globals";

const endpoint = "https://m482zc1xki.execute-api.eu-west-1.amazonaws.com/dev/";

class LoanContainer extends Component {
    state = {
        amount: 1,
        loadingApp: false,
        showApp: false,
        errors: {
            amount: ""
        },
        showStep: "",
        accessToken: null,
        offerId: null,
        uploadUrl: "",
        offer: {},
        transactionId: "13233j34345kqjdk2"
    };

    updateAmount = amount => {
        this.setState({ amount });
    };

    // submitOffer = token => {
    //     this.setState(
    //         { showApp: true, loadingApp: true, accessToken: token },
    //         () => {
    //             setTimeout(() => {
    //                 this.setState({
    //                     showStep: "upload",
    //                     loadingApp: false,
    //                     uploadUrl: "something",
    //                     offerId: 123
    //                 });
    //             }, 2000);
    //         }
    //     );
    // };
    setStep = step => {
        this.setState({
            showStep: step
        });
    };

    submitOffer = token => {
        this.setState(
            { showApp: true, loadingApp: true, accessToken: token },
            () => {
                axios
                    .post(`${endpoint}loans?accessToken=${token}`, {
                        amount: this.state.amount
                    })
                    .then(({ data }) => {
                        this.setState({
                            offerId: data.id,
                            uploadUrl: data.uploadUrl,
                            showStep: "upload",
                            loadingApp: false
                        });
                    })
                    .catch(error => {
                        console.log("ERROR: FUCK OFF", error);
                    });
            }
        );
    };

    imageUploaded = file => {
        this.setState({
            shameImage: file
        });
    };

    finishLoan = () => {
        const { offerId, accessToken } = this.state;
        this.setState({ loadingApp: true }, () => {
            axios
                .post(
                    `${endpoint}loans/${offerId}/finish?accessToken=${accessToken}`
                )
                .then(({ data }) => {
                    if (data.offerId !== offerId) {
                        this.setState({ offerId: data.offerId }, () => {
                            this.pollOffer();
                        });
                    } else {
                        this.pollOffer();
                    }
                })
                .catch(errors => {
                    console.log("FUCK OFF: ERRORS IN FINISH");
                });
        });
    };

    pollOffer = () => {
        const { offerId, accessToken } = this.state;
        axios
            .get(`${endpoint}offers/${offerId}?accessToken=${accessToken}`)
            .then(({ data }) => {
                const { status } = data;
                if (status === "ANALYSING")
                    setTimeout(() => {
                        this.pollOffer();
                    }, 200);
                else {
                    // PAUSE A BIT FOR NON-JARRING UI
                    setTimeout(() => {
                        this.setState({
                            loadingApp: false,
                            offer: data,
                            showStep: "results"
                        });
                    }, 2000);
                }
            })
            .catch(errors => {
                console.log("FUCK OFF: ERRORS IN FINISH");
            });
    };

    sendBitCoin = walletId => {
        this.setState(
            {
                loadingApp: true
            },
            () => {
                // axios.push()
                // .then()
                this.setState({
                    loadingApp: false,
                    showStep: "success"
                    // transactionId: data.transactionId
                });
            }
        );
    };

    render() {
        const { amount, loadingApp, errors, showApp, showStep } = this.state;
        return (
            <div>
                <Card
                    style={{
                        width: 354
                    }}
                >
                    <LoanForm
                        value={amount}
                        loading={loadingApp}
                        error={errors.amount}
                        handleSubmit={this.submitOffer}
                        updateAmount={this.updateAmount}
                        handleSuccessLogin={this.submitOffer}
                    />
                </Card>
                <FullscreenDialog
                    open={showApp}
                    appBarZDepth={0}
                    appBarStyle={{ height: 0 }}
                    style={{
                        backgroundColor: "#000"
                    }}
                >
                    {loadingApp ? (
                        <Spinner />
                    ) : showStep === "upload" ? (
                        <ImageUploadContainer
                            uploadUrl={this.state.uploadUrl}
                            nextStep={this.finishLoan}
                        />
                    ) : showStep === "results" ? (
                        <ResultsContainer
                            offer={this.state.offer}
                            accessToken={this.state.accessToken}
                            handleAcceptOffer={this.sendBitCoin}
                            setStep={this.setStep}
                        />
                    ) : showStep === "success" ? (
                        <Success
                            transactionId={this.state.transactionId}
                            handleRestart={this.restartApp}
                        />
                    ) : null}
                </FullscreenDialog>
            </div>
        );
    }
}

export default LoanContainer;
