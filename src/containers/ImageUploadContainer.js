import React, { Component } from "react";

// components
import ImageUpload from "../components/ImageUpload";

class ImageUploadContainer extends Component {
    state = {
        file: null,
        showNext: false
    };

    imageFinishedUpload = ({ file, fileUrl, signedUrl }) => {
        if (!file) return;
        this.setState({
            showNext: true,
            file: file
        });
    };

    handleNextClick = () => {
        this.props.nextStep();
    };

    render() {
        return (
            <ImageUpload
                uploadUrl={this.props.uploadUrl}
                showNext={this.state.showNext}
                handleImageUpload={this.imageFinishedUpload}
                handleNextClick={this.handleNextClick}
            />
        );
    }
}

export default ImageUploadContainer;
