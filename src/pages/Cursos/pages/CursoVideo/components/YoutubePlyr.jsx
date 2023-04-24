import React, { useState, useEffect } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css"

const YoutubePlyr = ({ videoId }) => {
  const [source, setSource] = useState(null);

  useEffect(() => {
    const fetchYoutubeVideoInfo = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyDZAs-8Pw9_AauKjdMN7urkVs26Md3amBQ&part=snippet,contentDetails`
      );
      const data = await response.json();
      const videoData = data.items[0];
      const videoUrl = `https://www.youtube.com/watch?v=${videoData.id}`;
      const videoTitle = videoData.snippet.title;
      const videoDuration = videoData.contentDetails.duration;

      const source = {
        type: "video",
        sources: [
          {
            src: videoUrl,
            provider: "youtube",
          },
        ],
        poster: `https://img.youtube.com/vi/${videoData.id}/hqdefault.jpg`,
        title: videoTitle,
        duration: videoDuration,
      };

      setSource(source);
    };

    fetchYoutubeVideoInfo();
  }, [videoId]);

  if (!source) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Plyr source={source} options={{ captions: { active: true } }} />
    </div>
  );
};

export default YoutubePlyr;
