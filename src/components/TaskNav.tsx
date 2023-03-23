import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GrFormEdit } from "react-icons/gr";
import { GiRocketFlight } from "react-icons/gi";
import { MdDeleteSweep, MdModeEdit, MdOutlineMoreVert } from "react-icons/md";
import { deleteTask } from "../lib/dalateTask";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import AddTaskForm from "./AddTaskForm";


interface NavTask {
  id: string;
  handleDeleteTask: (id:string)=>void;
}


export default function TaskNav({ id, handleDeleteTask }: NavTask) {
  return (
    <section className="">
      <Menu as="div" className="relative inline-block ">
        <div>
          <Menu.Button className="flex justify-center items-center w-full  rounded-full bg-black bg-opacity-20 p-1 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <MdOutlineMoreVert
              className=" h-4 w-4  hover:text-white"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-50 absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md backdrop-blur-lg bg-black/60 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button
                  className={`hover:bg-gradient-to-br from-main200 to-main100 hover:text-white group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <GiRocketFlight className="mr-2 h-5 w-5" aria-hidden="true" />
                  Start
                </button>
              </Menu.Item>
              <Menu.Item>
                <Dialog>
                  <DialogTrigger className="w-full">
                    <button
                      className={`hover:bg-gradient-to-br from-main200 to-main100 hover:text-white group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <MdModeEdit className="mr-2 h-5 w-5" aria-hidden="true" />
                      Edit
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <AddTaskForm />
                  </DialogContent>
                </Dialog>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => {
                    handleDeleteTask(id);
                  }}
                  className={`hover:bg-gradient-to-br from-main200 to-main100 hover:text-white group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <MdDeleteSweep className="mr-2 h-5 w-5" aria-hidden="true" />
                  Delete
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </section>
  );
}

