import React from "react";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";

// components
import { RoundButton, Image, colors } from "../globals";

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
                    <Image
                        style={{ width: "100%" }}
                        src={file.preview}
                        key={file.preview}
                    />
                );
            })}
        </div>
    );
};

const ImageUpload = ({
    uploadUrl,
    showNext,
    handleImageUpload,
    handleNextClick
}) => {
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
                style={{
                    width: 600
                }}
                s3Url="https://bitshame.s3.eu-west-1.amazonaws.com"
                upload={{
                    getSignedUrl: (file, callback) => {
                        callback({ signedUrl: uploadUrl });
                    },
                    accept: "image/*"
                }}
                onFinish={handleImageUpload}
            >
                <UploadDisplay />
            </DropzoneS3Uploader>
            {showNext ? (
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
                        onClick={handleNextClick}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default ImageUpload;
