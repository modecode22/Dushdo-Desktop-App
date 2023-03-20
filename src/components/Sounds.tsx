import war from "/Audiomachine-AboveandBeyond.mp3";
import war1 from "/Audiomachine-AbsoluteMagnitude.mp3";
import war2 from "/Audiomachine-Apotheosis.mp3";
import war3 from "/Audiomachine-AshesofTime .mp3";
import war4 from "/Audiomachine-BloodandStone.mp3";
import SoundPlayer from "./SoundPlayer";
import warImg from "/war.png";
import warwar1 from "/war1.png";
import warwar2 from "/war2.png";
import warwar3 from "/war3.png";
import warwar4 from "/war4.png";


const Sounds = () => {
  return (
    <section className="    p-2 pb-12  grid grid-cols-1  gap-2  ">
      <SoundPlayer src={war} img={warImg} />
      <SoundPlayer src={war1} img={warwar1} />
      <SoundPlayer src={war2} img={warwar2} />
      <SoundPlayer src={war3} img={warwar3} />
      <SoundPlayer src={war4} img={warwar4} />
      <SoundPlayer src={war1} img={warwar1} />
      <SoundPlayer src={war2} img={warwar2} />
      <SoundPlayer src={war3} img={warwar3} />
      <SoundPlayer src={war4} img={warwar4} />
    </section>
  );
}

export default Sounds

//* this for sidebar soundplayer
    // <section className="fixed  col-span-2 w-28  pt-5 pb-16 grid grid-cols-1  gap-5 h-screen bg-black/60 overflow-auto scrollbar scrollbar-thumb-main200/50 scrollbar-track-black/80"></section>;
