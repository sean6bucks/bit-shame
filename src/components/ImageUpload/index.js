import React from "react";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";
import RaisedButton from "material-ui/RaisedButton";

// GET FACEBOOK ID
const bucket_url = "https://bitshame.s3.eu-west-1.amazonaws.com/shame.png";

const handleFinishedUpload = info => {
    console.log("File uploaded with filename", info.filename);
    console.log("Access it on s3 at", info.fileUrl);
};

const getSignedUrl = (file, callback) => {
    callback({ signedUrl: bucket_url });
};

const UploadDisplay = ({ uploadedFiles, s3Url }) => {
    console.log(uploadedFiles);
    return (
        <div>
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

const ImageUpload = ({ handleDropAccepted }) => {
    let dropzoneRef;
    return (
        <div>
            <DropzoneS3Uploader
                ref={node => {
                    dropzoneRef = node;
                }}
                s3Url="https://bitshame.s3.eu-west-1.amazonaws.com"
                upload={{
                    getSignedUrl: getSignedUrl,
                    accept: "image/*"
                }}
                onFinish={handleFinishedUpload}
            >
                <UploadDisplay />
            </DropzoneS3Uploader>

            <RaisedButton
                label="Upload"
                onClick={() => {
                    dropzoneRef.open();
                }}
            />
        </div>
    );
};

export default ImageUpload;
