import { useMusicControl } from "./useMusicSoundControl";

const MUSIC_URL =
  "https://soundimage.org/wp-content/uploads/2020/07/Cool-Menu-Loop.mp3";
//TO_DO create sounds effects: hoover, click/select, win and loose, game starts and ends
// const SOUNDS_URL = "../../music-and-sounds/hoover-sound.mp3";
const MUSIC_ON = <span>&#128265;</span>;
const MUSIC_OFF = <span>&#128263;</span>;
const SOUNDS_ON = <span>&#128276;</span>;
const SOUNDS_OFF = <span>&#128277;</span>;

const AudioPlayControlButton = (props: { id: string }) => {
  const { id } = props;
  const audioURL = MUSIC_URL;
  const on = id === "music" ? MUSIC_ON : SOUNDS_ON;
  const off = id === "music" ? MUSIC_OFF : SOUNDS_OFF;
  const { audioStatus, toggleAudio } = useMusicControl(audioURL);

  return (
    <li key={id}>
      <button
        onClick={toggleAudio}
        className="header-icon"
        aria-label={`Audio Control button ${id}`}
      >
        {audioStatus ? on : off}
      </button>
    </li>
  );
};

export default AudioPlayControlButton;
