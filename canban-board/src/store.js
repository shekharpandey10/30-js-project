import { create } from "zustand";


const store = (set) => ({
    tasks: [{
        title: 'TestTask',
        status: "PLANNED"
    }]
})

export const useStore = create(store)