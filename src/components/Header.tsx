import { GiFireTail, GiRobe } from "react-icons/gi";
import {FaWarehouse} from "react-icons/fa"
import { IoMdAnalytics } from "react-icons/io";
import AddInHeader from "./AddInHeader";
import SoundBtn from "./SoundBtn";
import { Link, NavLink } from "react-router-dom";
import { MdSettingsSuggest } from "react-icons/md";

const Header = () => {
  return (
    <header className="col-span-5 z-20 bg-dark200 h-10 shadow-sm shadow-black/10 p-1 px-5 flex justify-between items-center">
      <section className="flex justify-center items-center gap-2">
        <SoundBtn />
        <nav className="ml-5    flex justify-center items-center gap-5">
          <NavLink
            to={"/"}
            className="gap-1 text-font/50 hover:text-font/80 active:hover:text-font/90 duration-100 text-xs font-medium flex justify-center items-center"
          >
            <FaWarehouse />
            Home
          </NavLink>
          <NavLink
            to={"/data"}
            className="gap-1 text-font/50 hover:text-font/80 active:hover:text-font/90 duration-100 text-xs font-medium flex justify-center items-center"
          >
            <IoMdAnalytics />
            Data
          </NavLink>
          <NavLink
            to={"/settings"}
            className="gap-1 text-font/50 hover:text-font/80 active:hover:text-font/90 duration-100 text-xs font-medium flex justify-center items-center"
          >
            <MdSettingsSuggest />
            Settings
          </NavLink>
        </nav>
      </section>
      <section className="flex justify-center items-center gap-5">
        <AddInHeader />
        {/* الحافز*/}
        <Link
          to={"/why"}
          className="group p-1 relative border border-transparent hover:border-font/20 rounded-full hover:bg-black/60 w-8 h-8 duration-200 active:border-font/50  active:bg-black/80 flex justify-center items-center"
        >
          <GiFireTail className="w-6 h-6" />
          <div className="z-[60] font-bold text-xs group-hover:scale-100 scale-0 duration-75  absolute w-20 bg-black/60 rounded-lg flex justify-center items-center  top-10 h-6  ">
            Why ?
          </div>
        </Link>
        {/* من نحن ؟ */}
        <Link
          to={"/who"}
          className="group relative border border-transparent hover:border-font/20 rounded-full hover:bg-black/60 w-8 h-8 duration-200 active:border-font/50  active:bg-black/80 flex justify-center items-center"
        >
          <GiRobe className="w-6 h-6" />
          <div className="z-[60] font-bold text-xs group-hover:scale-100 scale-0 duration-75  absolute w-20 bg-black/60 rounded-lg flex justify-center items-center  top-10 h-6  ">
            Who ?
          </div>
        </Link>
      </section>
    </header>
  );
}

export default Header