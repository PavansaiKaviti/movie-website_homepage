import React from "react";
import Teaser from "../video/Godzilla x Kong_ The New Empire _ Official Trailer 2.mp4";
import Godzilla from "../images/godzillafight.png";

const VideoImage = () => {
  return (
    <div class="scroll-container">
      <video src={Teaser} controls></video>
      <img class="space " src={Godzilla} alt="Cinque Terre" width="300" />
    </div>
  );
};

export default VideoImage;
