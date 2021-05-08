import create from "zustand";

const useStore = create((set) => ({
  people: ["Mpillz", "Dlamz"],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
}));

export default useStore;
