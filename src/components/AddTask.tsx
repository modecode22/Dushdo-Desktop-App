import { MdOutlineAdd } from "react-icons/md"
import AddTaskForm from "./AddTaskForm";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useRef, useState } from "react";

const AddTask = () => {
      const close = useRef(null)

  return (
    <>
      <Dialog>
        <DialogTrigger
          ref={close}
          className="w-full flex justify-center items-center"
        >
          <section title="add new task" className="max-w-xl text-font/50 hover:text-main200 gap-2  cursor-pointer select-none h-20 p-2 w-full rounded-xl border border-font/50 border-dashed hover:border-main200 flex justify-center items-center flex-col active:brightness-110 duration-100 transition-all">
            <MdOutlineAdd className="h-8 w-8" />
            {/* <h1 className="font-bold text-xl">Add New Task</h1> */}
          </section>
        </DialogTrigger>
        <DialogContent>
          <AddTaskForm close={close} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddTask