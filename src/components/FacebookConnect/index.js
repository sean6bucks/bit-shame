import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FacebookLoginButton } from "react-social-login-buttons";

const FacebookConnect = ({ handleCallback }) => {
    return (
        <FacebookLogin
            appId="261106171096651"
            autoLoad={false}
            fields="name,email,picture"
            scope="public_profile,publish_actions,user_friends,user_photos"
            callback={handleCallback}
            render={renderProps => {
                return <FacebookLoginButton onClick={renderProps.onClick} />;
            }}
        />
    );
};

export default FacebookConnect;
