import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  people: ["Mpillz", "Dlamz"],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
});
const useStore = create(devtools(store));

export default useStore;
