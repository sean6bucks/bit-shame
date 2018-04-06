import React, { Component } from "react";
import axios from "axios";
import FacebookConnect from "../components/FacebookConnect";

const fb_url = "https://graph.facebook.com";

class FacebookConnectContainer extends Component {
    state = {
        loadingFb: false,
        signedInFb: false
    };

    getFriendCount = ({ accessToken, id }) => {
        axios.get(`${fb_url}/${id}/friends`, {
            headers: {
                Authorization: "Bearer " + accessToken
            }
        });
    };

    successfulLogin = response => {
        this.setState(
            {
                signedInFb: true
            },
            () => {
                this.getFriendCount(response);
            }
        );
    };

    render() {
        return <FacebookConnect handleCallback={this.successfulLogin} />;
    }
}

export default FacebookConnectContainer;
