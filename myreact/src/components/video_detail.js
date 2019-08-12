import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="details">
        <div>{video.snippet.title}</div>
      </div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-items" src={url} />
        <div>
          <p>{video.snippet.description}</p>
        </div>
      </div>
      
    </div>
  );
};

export default VideoDetail;