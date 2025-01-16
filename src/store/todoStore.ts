import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Task {
  id: string;
  name: string;
  completed: boolean;
  active: boolean;
}

interface Filters {
  status: "all" | "completed" | "active";
}

interface State {
  taskList: Task[];
  filters: Filters;
  addTask: (text: string) => void;
  deleteTask: (id: string) => void;
  setFilters: (filter: Filters) => void;
  toggleTask: (id: string) => void;
  deleteAllComplete: () => void;
  updateList: (newList: Task[]) => void;
}

const initialState: State = {
  taskList: [
    {
      name: "Complete online JavaScript course",
      id: "abc-001",
      completed: true,
      active: true,
    },
    {
      name: "Jog around the park 3x",
      id: "abc-002",
      completed: false,
      active: true,
    },
    {
      name: "10 minutes meditation",
      id: "abc-003",
      completed: false,
      active: true,
    },
    { name: "Read for 1h", id: "abc-004", completed: false, active: true },
    {
      name: "Pick up groceries",
      id: "abc-005",
      completed: false,
      active: true,
    },
    {
      name: "Complete Todo App on Fronted Mentor",
      id: "abc-006",
      completed: false,
      active: true,
    },
  ],
  filters: { status: "all" },
  addTask: () => {},
  deleteTask: () => {},
  setFilters: () => {},
  toggleTask: () => {},
  deleteAllComplete: () => {},
  updateList: () => {},
};

const useTodoStore = create<State>()(
  persist(
    (set) => ({
      ...initialState,
      addTask: (text: string) =>
        set((state: State) => ({
          taskList: [
            ...state.taskList,
            {
              id: crypto.randomUUID(),
              name: text,
              completed: false,
              active: true,
            },
          ],
        })),
      setFilters: (filters: Filters) => set({ filters }),
      deleteTask: (id: string) =>
        set((state: State) => ({
          taskList: state.taskList.filter((task) => task.id !== id),
        })),
      toggleTask: (id: string) =>
        set((state: State) => ({
          taskList: state.taskList.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
      deleteAllComplete: () =>
        set((state: State) => ({
          taskList: state.taskList.filter((task) => !task.completed),
        })),
      updateList: (newList: Task[]) =>
        set((state: State) => ({
          taskList: newList,
        })),
    }),
    {
      name: "todo",
    }
  )
);

export default useTodoStore;
