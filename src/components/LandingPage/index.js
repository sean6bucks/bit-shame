import React from "react";
import FlatButton from "material-ui/FlatButton";
import { Header, Container, Image, RoundButton, colors } from "../globals";

// containers
import LoanContainer from "../../containers/LoanContainer";

// static assets
import LogoImg from "./images/arrow.png";

const LandingPage = () => {
    return (
        <div>
            <Header>
                <Image style={{ width: 100 }} src={LogoImg} />
                <div style={{ float: "right" }}>
                    <FlatButton
                        label="Login"
                        style={{ color: "#fff", marginRight: 10 }}
                    />
                    <RoundButton
                        label="POST A DIRTY PHOTO"
                        backgroundColor={colors.purple}
                        labelColor="#FFFFFF"
                        labelStyle={{
                            padding: "0 25px"
                        }}
                    />
                </div>
            </Header>
            <Container
                style={{
                    display: "flex",
                    flexDirection: "row"
                }}
            >
                <div
                    style={{
                        flex: 1
                    }}
                />
                <LoanContainer
                    style={{
                        flex: 1,
                        width: 360
                    }}
                />
            </Container>
        </div>
    );
};

export default LandingPage;
