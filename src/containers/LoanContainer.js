import React, { Component } from "react";
import axios from "axios";
import LoanFormContainer from "./LoanFormContainer";
import FacebookConnectContainer from "./FacebookConnectContainer";
import ImageUpload from "../components/ImageUpload";

class LoanContainer extends Component {
    render() {
        return (
            <div>
                {/* <LoanFormContainer /> */}
                <FacebookConnectContainer />
                <ImageUpload handleDropAccepted={this.dropValidFile} />
            </div>
        );
    }
}

export default LoanContainer;
