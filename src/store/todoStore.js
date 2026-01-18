import { create } from "zustand";

export const useTodoStore = create((set, get) => ({
  tasks: [],

  addTask: (text) => {
    if (!text.trim()) return;
    
    const newTask = {
      id: new Date().getTime(),
      title: text,
      completed: false,
    };
    set((state) => ({ tasks: [newTask, ...state.tasks] }));
  },

  toggleTask: (id) => {
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    }));
  },

  removeTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    }));
  },

  clearCompleted: () => {
    set((state) => ({
    tasks: state.tasks.filter((task) => !task.completed),
  }));
},

}));