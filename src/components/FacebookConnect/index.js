import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

const FacebookConnect = ({ handleCallback }) => {
    return (
        <FacebookLogin
            appId="261106171096651"
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,publish_actions,user_friends,user_photos"
            callback={handleCallback}
        />
    );
};

export default FacebookConnect;
