
import SoundPlayer from "./SoundPlayer";
import rain from "/rain.png";
import water from "/water.png";
import nature from "/nature.png";
import fire from "/fire.png";
import brownnoise from "/brownnoise.png";
import rainSound from "/rain.mp3";
import waterSound from "/water.mp3";
import natureSound from "/nature.mp3";
import fireSound from "/fire.mp3";
import brownnoiseSound from "/brownnoise.mp3";

const Sounds = () => {
  return (
    <section className="    p-2 pb-12  grid grid-cols-1  gap-2  ">
      <SoundPlayer src={rainSound} img={rain} />
      <SoundPlayer src={waterSound} img={water} />
      <SoundPlayer src={natureSound} img={nature} />
      <SoundPlayer src={fireSound} img={fire} />
      <SoundPlayer src={brownnoiseSound} img={brownnoise} />
    </section>
  );
}

export default Sounds

//* this for sidebar soundplayer
    // <section className="fixed  col-span-2 w-28  pt-5 pb-16 grid grid-cols-1  gap-5 h-screen bg-black/60 overflow-auto scrollbar scrollbar-thumb-main200/50 scrollbar-track-black/80"></section>;
