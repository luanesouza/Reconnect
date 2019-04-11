import React from 'react'
import {ZiggeoRecorder} from 'react-ziggeo'

function VideoList(){
    // after react-ziggeo 3.3.0 version embedding argument also accessible
    function recorderRecording = (embedding /* only starting from react-ziggeo 3.3.0 */) => {
        console.log('Recorder onRecording');
    };

    function recorderUploading = (embedding /* only starting from react-ziggeo 3.3.0 */) => {
        console.log('Recorder uploading');
    };


    <ZiggeoRecorder
        apiKey={API_KEY}
        video={VIDEO_TOKEN}
        height={180}
        width={320}
        onRecording={this.recorderRecording}
        onUploading={this.recorderUploading}
    />
}
export default VideoList;
