import React, { useState } from "react";
import "./player.css";

import song from "../../Music/music.mp3";
import playBtn from "../../Images/play.png";
import pauseBtn from "../../Images/pause.png";
import volumeIcon from "../../Images/volume1.png";
import frameImg from "../../Images/borderred1.png";

const Player = () => {
  const [volum, setVolum] = useState(0.2);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio(song));
  //const audio = new Audio(song);
  audio.loop = true;
  audio.volume = volum;

  const playPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="PSuper">
      <img className="FrameImg" src={frameImg} />
      <div className="PlayPauseBtn" onClick={playPause}>
        <img src={isPlaying ? pauseBtn : playBtn} />
      </div>
      <div className="VolumeControl">
        <img src={volumeIcon} alt="" />
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          step="0.01"
          max="1"
          value={volum}
          onChange={(e) => setVolum(e.target.valueAsNumber)}
          // style="background:inherit;"
        />
        {/* <p>volume = {volum}</p> */}

        {/* <p>{isPlaying ? "yes" : "no"}</p> */}
      </div>
    </div>
  );
};

export default Player;
