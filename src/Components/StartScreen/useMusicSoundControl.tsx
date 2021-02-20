import { useState, useEffect } from "react";

export const useMusicControl = (musicURL: string) => {
  const [audioPlayer] = useState(new Audio(musicURL));
  const [audioStatus, setAudioStatus] = useState(false);
  const toggleAudio = () => setAudioStatus(!audioStatus);

  useEffect(() => {
    audioStatus ? audioPlayer.play() : audioPlayer.pause();
  }, [audioStatus]);

  useEffect(() => {
    audioPlayer.addEventListener("ended", () => setAudioStatus(false));

    return () =>
      audioPlayer.removeEventListener("ended", () => setAudioStatus(false));
  });

  return { audioStatus, toggleAudio };
};
