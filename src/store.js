import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let settingsStore = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
});

let peopleStore = (set) => ({
  people: ["Mpillz", "Dlamz"],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
});

//persist allows us to persisat state inside client storage
settingsStore = devtools(settingsStore);
settingsStore = persist(settingsStore, { name: "user_settings" });

peopleStore = devtools(peopleStore);
export const useSettingsStore = create(settingsStore);
export const usePeopleStore = create(peopleStore);

// export default useStore;
