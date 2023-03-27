import { MdOutlineAdd } from "react-icons/md";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useRef } from "react";
import DeleteAllDataDialog from "./DeleteAllDataDialog";

const DeleteAllDataBtn = () => {
          const close = useRef(null);
  return (
    <>
      <Dialog>
        <DialogTrigger
          ref={close}
        >
          <button className="transition-all duration-100 hover:bg-red-700/80 hover:shadow-red-700/80 hover:text-font/80 active:text-font active:bg-red-700 active:shadow-red-700 shadow-sm shadow-red-600/30 px-1 absolute bottom-5 right-5 text-font/30 bg-red-700/30 h-10 rounded-xl">
            Delete All Data
          </button>
        </DialogTrigger>
        <DialogContent>
          <DeleteAllDataDialog close={close} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DeleteAllDataBtn