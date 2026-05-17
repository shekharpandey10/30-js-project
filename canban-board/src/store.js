import { create } from "zustand";
import { devtools } from "zustand/middleware";


const store = devtools((set) => ({
    tasks: [],
    addTask: (title, status) => set((state) => {
        let id = Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
        return { tasks: [...state.tasks, { id, title, status }] }
    }),
    deleteTask: (id) => set((state) => {
        return { tasks: [...state.tasks.filter((t) => !(t.id === id))] }
    }),
    onDropTask: (id, newStatus) => set((state) => {
        return { tasks: state.tasks.map((t) => t.id === id ? { ...t, status: newStatus } : t) }
    })


}))

export const useStore = create(store)