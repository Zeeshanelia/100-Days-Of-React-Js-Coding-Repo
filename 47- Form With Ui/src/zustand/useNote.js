import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useNote = create(persist(
  (set) => ({
    notes: [],
    setNotes: (payload) => set((state) => ({
      notes: [...state.notes, payload]
    })),
    deleteNote : (id)=> set ((state)=>({
      notes: state.notes.filter(item => item.id !==id )
    }))

  }),
  { name: 'NoteBook' }
));
