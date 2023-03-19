import { useState } from 'react';
import { BsMusicNoteList } from 'react-icons/bs';
import Sounds from './Sounds';
import { ScrollArea } from './ui/scrollarea';

const SoundBtn = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="group p-1 relative border border-transparent hover:border-font/20 rounded-full hover:bg-black/60 w-8 h-8 duration-200 active:border-font/50  active:bg-black/80 flex justify-center items-center"
      >
        <BsMusicNoteList className="w-5 h-5" />
        <div className="z-[60] font-bold text-xs group-hover:scale-100 scale-0 duration-75  absolute w-20 bg-black/60 rounded-lg flex justify-center items-center  top-10 h-6  ">
          Sound
        </div>
      </button>
      <div
        className={`duration-200 transition-all ${
          open ? "left-0" : "-left-32"
        } mt-10 w-28 h-screen fixed  top-0`}
      >
        <ScrollArea className=" w-28 h-screen absolute left-0 top-0   flex justify-center items-center bg-dark200  ">
          <Sounds />
        </ScrollArea>
      </div>
    </>
  );
}

export default SoundBtn