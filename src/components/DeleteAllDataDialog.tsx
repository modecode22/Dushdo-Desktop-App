
import React from 'react'
import { deleteAllTasks } from '../lib/deleteAllTasks';
import { useCurrentStore } from '../store/store';

interface DeleteAllDataDialogProps {
  close: React.MutableRefObject<null | HTMLButtonElement>;
}
const DeleteAllDataDialog = ({ close }: DeleteAllDataDialogProps) => {
    const  setCurrentTask=useCurrentStore(state=>state.setCurrentTask)
  return (
    <main className="pt-5 gap-5 flex-col flex justify-center items-center">
      <h1 className='text-2xl text-center'>you about to delete all your data !!</h1>
      <section className='flex justify-center items-center gap-5'>
        <button
          onClick={() => {
            close.current?.click();
          }}
          className="duration-100 transition-all  h-10 px-2 text-center bg-darkform/80 rounded-lg shadow-sm shadow-darkform/80 hover:shadow-darkform/30 hover:bg-darkform/60 active:brightness-110 "
        >
          Cancel
        </button>
        <button onClick={()=>{
            deleteAllTasks()
            setCurrentTask(null)
            close.current?.click();
        }} className="duration-100 transition-all  h-10 px-2 text-center bg-red-500/80 rounded-lg shadow-sm shadow-red-500/80 hover:shadow-red-500/30 hover:bg-red-500/60 active:brightness-110 ">
          Delete
        </button>
      </section>
    </main>
  );
};

export default DeleteAllDataDialog