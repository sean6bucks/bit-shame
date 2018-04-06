import React, { Component } from "react";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";
import RaisedButton from "material-ui/RaisedButton";

// components
import { RoundButton, colors } from "../globals";

// GET FACEBOOK ID
const bucket_url = "https://bitshame.s3.eu-west-1.amazonaws.com/shame.png";
let show_next_button = false;

const getSignedUrl = (file, callback) => {
    // axios.post()
    callback({ signedUrl: bucket_url });
};

const UploadDisplay = ({ uploadedFiles, s3Url }) => {
    return (
        <div style={{ textAlign: "center" }}>
            {!uploadedFiles.length ? (
                <p
                    style={{
                        width: 600,
                        height: 200,
                        borderWidth: 2,
                        borderStyle: "dashed",
                        borderColor: colors.lightGrey,
                        borderRadius: 5,
                        position: "relative",
                        cursor: "pointer",
                        overflow: "hidden",
                        margin: 0,
                        textAlign: "center",
                        lineHeight: "200px"
                    }}
                >
                    Drag and drop your ugly photo or{" "}
                    <span style={{ color: colors.purple, fontWeight: "bold" }}>
                        search on your computer
                    </span>
                </p>
            ) : null}
            {uploadedFiles.map(({ file }) => {
                return (
                    <div
                        style={{
                            width: "100%"
                        }}
                        key={file.name}
                    >
                        <img
                            style={{
                                width: "100%",
                                height: "auto",
                                verticalAlign: "top"
                            }}
                            src={file.preview}
                        />
                    </div>
                );
            })}
        </div>
    );
};

class ImageUpload extends Component {
    state = {
        file: null,
        show_next: false
    };

    handleFinishedUpload = ({ file, fileUrl, signedUrl }) => {
        if (!file) return;
        this.setState({
            show_next: true,
            file: file
        });
    };

    render() {
        let dropzoneRef;
        return (
            <div style={{ padding: 100 }}>
                <h5
                    style={{
                        display: "inline-block",
                        padding: "3px 2px 0px",
                        margin: "40px 0",
                        backgroundColor: colors.purple
                    }}
                >
                    SHOCK YOUR PARENTS
                </h5>
                <h1
                    style={{
                        fontSize: 40,
                        marginBottom: 40,
                        lineHeight: "40px",
                        maxWidth: 600
                    }}
                >
                    Reduce your interest rate with your most shameable photo
                </h1>
                <DropzoneS3Uploader
                    ref={node => {
                        dropzoneRef = node;
                    }}
                    style={{
                        width: 600
                    }}
                    s3Url="https://bitshame.s3.eu-west-1.amazonaws.com"
                    upload={{
                        getSignedUrl: getSignedUrl,
                        accept: "image/*"
                    }}
                    onFinish={this.handleFinishedUpload}
                >
                    <UploadDisplay />
                </DropzoneS3Uploader>
                {this.state.show_next ? (
                    <div
                        style={{
                            marginTop: 30
                        }}
                    >
                        <RoundButton
                            backgroundColor={colors.purple}
                            label="CHECK YOUR SHAME METER"
                            labelColor={colors.white}
                            labelStyle={{ fontSize: 18, padding: 30 }}
                            onClick={() => {
                                this.props.handleCheckShame(this.state.file);
                            }}
                        />
                    </div>
                ) : null}
            </div>
        );
    }
}

export default ImageUpload;
