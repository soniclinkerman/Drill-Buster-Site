import React from "react";
import ReactPlayer from "react-player";

const Video = ({ url }) => {
  return (
    <>
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
        // style={{ minHeight: "360px" }}
      />
    </>
  );
};

export default Video;
