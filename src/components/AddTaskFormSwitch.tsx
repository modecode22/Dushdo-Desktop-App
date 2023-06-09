import { Dispatch, SetStateAction } from "react";
import { Switch } from "@headlessui/react";
import { BsArrowRepeat } from "react-icons/bs";
import { VscSyncIgnored } from "react-icons/vsc";
interface Props {
  enabled: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
}


export default function AddTaskFormSwitch({enabled, setEnabled} : Props) {

  return (
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled
            ? "bg-gradient-to-br from-main100 to-main200 "
            : "bg-main300/20"
        }
          relative inline-flex h-8 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-8" : "translate-x-0"}
          flex justify-center items-center text-darkform   pointer-events-none  h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          {enabled ? (
            <BsArrowRepeat className="duration-200 transition-all" />
            ) : (
            <VscSyncIgnored className="duration-200 transition-all" />
          )}
        </span>
      </Switch>
    </>
  );
}
