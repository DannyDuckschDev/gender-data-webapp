// src/components/MediaTypeList.tsx

import React from "react";

interface MediaTypeListProps {
  currentMediaType: string;
  setCurrentMediaType: (type: string) => void;
}

const MediaTypeList: React.FC<MediaTypeListProps> = ({ currentMediaType, setCurrentMediaType }) => {
  const mediaTypes = ['Article', 'Book', 'Video'];

  return (
    <ul>
      {mediaTypes.map((type) => (
        <li 
          key={type} 
          className={currentMediaType === type ? 'active-media-type' : ''}
          onClick={() => setCurrentMediaType(type)}
        >
          <a href="#">
            {type}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MediaTypeList;
