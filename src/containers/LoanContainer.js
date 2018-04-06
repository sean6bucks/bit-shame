import React, { Component } from "react";
import axios from "axios";
import { Card } from "material-ui/Card";
import FullscreenDialog from "material-ui-fullscreen-dialog";

// containers
import FacebookConnectContainer from "./FacebookConnectContainer";

// components
import LoanForm from "../components/LoanForm";
import ImageUpload from "../components/ImageUpload";
import { Spinner } from "../components/globals";

const endpoint = "https://m482zc1xki.execute-api.eu-west-1.amazonaws.com/dev/";

class LoanContainer extends Component {
    state = {
        amount: 1,
        loading_app: false,
        show_app: false,
        errors: {
            amount: ""
        },
        show_step: "",
        fb_access_token: null
    };

    updateAmount = amount => {
        this.setState({ amount });
    };

    // submitOffer = token => {
    //     this.setState(
    //         { show_app: true, loading_app: true, fb_access_token: token },
    //         () => {
    //             setTimeout(() => {
    //                 this.setState({
    //                     show_step: "upload",
    //                     loading_app: false,
    //                     upload_url: "something",
    //                     offer_id: 123
    //                 });
    //             }, 2000);
    //         }
    //     );
    // };

    submitOffer = token => {
        this.setState(
            { show_app: true, loading_app: true, fb_access_token: token },
            () => {
                axios
                    .post(`${endpoint}loans?access_token=${token}`, {
                        amount: this.state.amount
                    })
                    .then(response => {
                        console.log(response);
                        this.setState({
                            show_step: "upload",
                            loading_app: false,
                            upload_url: "something",
                            offer_id: 123
                        });
                    })
                    .catch(error => {
                        console.log("ERROR: FUCK OFF", error);
                    });
            }
        );
    };

    getFinalOffer = file => {
        this.setState({
            loading_app: true
        });
    };

    render() {
        const { amount, loading_app, errors, show_app, show_step } = this.state;
        return (
            <div>
                <Card
                    style={{
                        width: 354
                    }}
                >
                    <LoanForm
                        value={amount}
                        loading={loading_app}
                        error={errors.amount}
                        handleSubmit={this.submitOffer}
                        updateAmount={this.updateAmount}
                        handleSuccessLogin={this.submitOffer}
                    />
                </Card>
                <FullscreenDialog
                    open={show_app}
                    appBarZDepth={0}
                    appBarStyle={{ height: 0 }}
                    style={{
                        backgroundColor: "#000"
                    }}
                >
                    {loading_app ? (
                        <Spinner />
                    ) : show_step === "upload" ? (
                        <ImageUpload handleCheckShame={this.getFinalOffer} />
                    ) : show_step === "offer" ? null : null}
                </FullscreenDialog>
            </div>
        );
    }
}

export default LoanContainer;
