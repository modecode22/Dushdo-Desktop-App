import { MdAdd } from 'react-icons/md';
import AddTaskForm from './AddTaskForm';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

const AddInHeader = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <button className="w-8 h-8 group relative p-1   flex justify-center items-center">
            {/* أضف مهمة جديدة */}
            <MdAdd className="w-6 h-6 bg-gradient-to-br from-main100 to-main200 duration-200 group-hover:bg-gradient-to-r rounded-full" />
            <div className="z-[55] font-bold text-xs group-hover:scale-100 scale-0 duration-75  absolute w-20 bg-black/60 rounded-lg flex justify-center items-center  top-10 h-6 f  ">
              Add New Task
            </div>
          </button>
        </DialogTrigger>
        <DialogContent>
          <AddTaskForm />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddInHeader