import { MdOutlineAdd } from "react-icons/md"
import AddTaskForm from "./AddTaskForm";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const AddTask = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="w-full flex justify-center items-center">
          <section className="max-w-xl text-font/50 hover:text-main200 gap-2  cursor-pointer select-none h-20 p-2 w-full rounded-xl border-2 border-font/50 border-dashed hover:border-main200 flex justify-center items-center flex-col active:brightness-110 duration-100 transition-all">
            <MdOutlineAdd className="h-8 w-8" />
            <h1 className="font-bold text-xl">Add New Task</h1>
          </section>
        </DialogTrigger>
        <DialogContent>
          <AddTaskForm />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddTask