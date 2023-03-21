import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SideBarState {
  open: boolean;
  toggle: () => void;
}

export const useSideBarStore = create<SideBarState>()(
  devtools(
    persist(
      (set,get ) => ({
        open: false,
        toggle: () =>{
            const open = get().open
            open ? set({ open: false }) : set({ open: true }); 
        }
       ,
      }),
      {
        name: "sidebar",
      }
    )
  )
);
