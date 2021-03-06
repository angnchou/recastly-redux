import React from 'react';
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => ( 
    <div className="video-list">
        {
          props.videos.map(video => (
            <VideoListEntry
              key={video.etag}
              video={video}
              handleVideoListEntryTitleClick={props.handleVideoListEntryTitleClick}
            />
          ))
        }
      </div>
)
export default VideoList;
