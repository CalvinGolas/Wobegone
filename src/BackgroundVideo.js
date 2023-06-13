import "./BackgroundVideo.css";
import vid from "./rotating-fish.mp4";

function BackgroundVideo() {
  return (
    <video className="BackgroundVideo" autoPlay loop muted>
      <source src={vid} type="video/mp4" />
    </video>
  );
}

export default BackgroundVideo;
