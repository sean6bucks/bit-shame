import React, { Component } from "react";
import FacebookConnect from "../components/FacebookConnect";

class FacebookConnectContainer extends Component {
    state = {
        loading_fb: false
    };

    successfulLogin = response => {
        this.setState({ loading_fb: true }, () => {
            if (!response.accessToken) {
                console.log("ERROR: NO ACCESS TOKEN GIVEN, FUCK OFF");
                return;
            }
            this.props.handleSuccessLogin(response.accessToken);
        });
    };

    render() {
        return <FacebookConnect handleCallback={this.successfulLogin} />;
    }
}

export default FacebookConnectContainer;
