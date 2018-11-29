import React from 'react';
import VideoListEntry from './VideoListEntry.js';

var VideoList = () => (
  <div className="video-list">
    {
      this.props.videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={this.props.handleVideoListEntryTitleClick}
        />
      ))
    }
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
