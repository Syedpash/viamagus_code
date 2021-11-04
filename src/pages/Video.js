import React, {useState} from 'react'
import "../css/video.css";
import ReactPlayer from 'react-player';
var videos = ["https://youtu.be/j8PDTJNaPc0", "https://youtu.be/W9fRvESVClE", "https://youtu.be/KJvzuJvDHlI", "https://youtu.be/xyLI5u4JoG4", "https://youtu.be/9klzZsVw-cQ", "https://youtu.be/RtPb4NMkT-s"]
const Video = () => {
    const [current, setCurrent] = useState([videos[0], 0]);
    return (
        <div className="video-page">
            <ReactPlayer url={current[0]} width="100%" height="300px"/>
            <div className="video-circles">
            {
                videos.map((video,i) => {
                    return <div className={`circle ${current[1] === i ? "active-circle" : ""}`} onClick={e => setCurrent([video, i])}></div>
                })
            }
            </div>
        </div>
    )
}

export default Video
