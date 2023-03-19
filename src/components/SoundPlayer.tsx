"use client"

import { useRef, useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
type AudioPlayerProps = {
  src: string;
  img: any;
};

const SoundPlayer: React.FC<AudioPlayerProps> = ({ src , img }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(100);

  const handlePlay = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const handleRestart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    handlePlay();
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current?.currentTime ?? 0);
  };

  // const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newVolume = Number(event.target.value);
  //   setVolume(newVolume);
  //      if (audioRef.current) {
  //        audioRef.current.volume = newVolume / 100
  //      }
  // };

   const handleVolumeChange = (value: number[]) => {
     const thevalue = value[0];
     setVolume(thevalue);
     if (audioRef.current) {
       audioRef.current.volume = thevalue / 100;
     }
   };

  return (
    <section
      className={`border duration-200 transition-all border-main100/40 group relative ${
        isPlaying
          ? "shadow-md hover:brightness-110 shadow-main200/50 "
          : "grayscale hover:grayscale-[0.5]"
      }  active:grayscale-0 select-none cursor-pointer relative flex flex-col justify-end items-center w-20 aspect-square  rounded-full   bg-black/20`}
    >
      {!isPlaying ? (
        <div
          onClick={handlePlay}
          className={`hidden duration-100 transition-all  w-full h-full group-hover:flex justify-center items-center absolute`}
        >
          <BsFillPlayFill className="w-10 h-10 z-50 " />
        </div>
      ) : (
        <div
          onClick={handlePause}
          className={`hidden duration-100 transition-all  w-full h-full group-hover:flex justify-center items-center absolute`}
        >
          <BsFillPauseFill className="w-10 h-10 z-50 " />
        </div>
      )}

      <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} loop />
      <img
        onClick={isPlaying ? handlePause : handlePlay}
        className={`w-full h-full  rounded-full duration-200`}
        src={img}
        alt=""
      />
      <div className="absolute w-16 bottom-2">
        <div className="w-full">
          {isPlaying && (
            <Slider.Root
              className="relative  flex items-center select-none touch-none w-full h-2"
              defaultValue={[50]}
              max={100}
              step={1}
              value={[volume]}
              onValueChange={handleVolumeChange}
              aria-label="Volume"
            >
              <Slider.Track className="bg-black/50 relative grow rounded-full h-2">
                <Slider.Range className="absolute bg-white rounded-full h-full" />
              </Slider.Track>
              <Slider.Thumb className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-black/80 rounded-[10px] hover:bg-main100 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-black/60" />
            </Slider.Root>
          )}

          {/* <input
            id="volume"
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
          /> */}
        </div>
      </div>
      {/* <div>Current Time: {currentTime.toFixed(2)}</div> */}
    </section>
  );
};

export default SoundPlayer;