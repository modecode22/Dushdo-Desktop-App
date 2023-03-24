import { useState } from "react";
import { useSettingStore } from "../store/store";
import { ImSpinner10 } from "react-icons/im";
import { GiPartyPopper } from "react-icons/gi";

interface Props {
  newSettings : Settings
}

const SaveSettingsBtn = ({newSettings}:Props) => {

    const setNewSettings =useSettingStore(state=>state.update) 
   const [isLoading, setIsLoading] = useState(false);
   const [isSaved, setIsSaved] = useState(false);

const handleClick = () => {
  setIsLoading(true);
  setNewSettings(newSettings);
  setTimeout(() => {
    setIsLoading(false);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 2000);
  }, 2000);
};    return (
  <button
    onClick={handleClick}
    disabled={isLoading}
    className="flex justify-center items-center gap-2 rounded-xl w-1/2 h-10 bg-black/80 shadow-sm shadow-black hover:bg-gradient-to-br from-main100 to-main200 duration-100 transition-all  hover:shadow-main100 active:brightness-110"
  >
    {isLoading ? (
      <ImSpinner10 className="animate-spin" />
    ) : isSaved ? (
      <>
        Saved <GiPartyPopper/>
      </>
    ) : (
      "Save"
    )}
  </button>
);
}

export default SaveSettingsBtn