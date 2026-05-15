import { create } from "zustand";


const store = (set) => ({
    tasks: [{
        title: 'TestTask',
        status: "PLANNED"
    }],
    addTask: (title, status) => set((status) => ([...status, { title, status }])),

})

export const useStore = create(store)