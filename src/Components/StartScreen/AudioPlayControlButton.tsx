import { useMusicControl } from "./useMusicSoundControl";

const MUSIC_URL =
  "https://soundimage.org/wp-content/uploads/2020/07/Cool-Menu-Loop.mp3";
const MUSIC_ON = <span>&#128265;</span>;
const MUSIC_OFF = <span>&#128263;</span>;
const SOUNDS_ON = <span>&#128276;</span>;
const SOUNDS_OFF = <span>&#128277;</span>;

const AudioPlayControlButton = (props: { id: string }) => {
  const [audioStatus, toggleAudio] = useMusicControl(MUSIC_URL);
  const { id } = props;
  const on = id === "music" ? MUSIC_ON : SOUNDS_ON;
  const off = id === "music" ? MUSIC_OFF : SOUNDS_OFF;

  return (
    <button
      onClick={toggleAudio}
      className="header-icon"
      aria-label={`Audio Control button ${id}`}
    >
      {audioStatus ? on : off}
    </button>
  );
};

export default AudioPlayControlButton;
