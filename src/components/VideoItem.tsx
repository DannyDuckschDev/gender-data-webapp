// src/components/VideoItem.tsx

import React from "react";
import { Content } from "../types";

interface VideoItemProps{
    content: Content;
    isExpanded: boolean;
    toggleDescription: (id: number) => void;
}
const VideoItem: React.FC<VideoItemProps> = ({ content, isExpanded, toggleDescription}) => {
    return (
        <div className="video-item">
        {content.video && (
          <>
            <h3>{content.name}</h3>
            <p><span>Channel:</span> {content.video.channel}</p>
            <p><span>Date:</span> {content.video.date}</p>
            <p>{content.video.excerpt}</p>
            <button onClick={() => toggleDescription(content.id)} className="toggle-description-btn">
              {isExpanded ? '▲' : '▼'} Read more
            </button>
            {isExpanded && <p>{content.video.description}</p>}
            <a href={content.video.url} className="read-link" target="_blank">Watch the video</a>
          </>
        )}
      </div> 
    );
};

export default VideoItem;