import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useNote = create(
  persist(
    (set) => ({
      // Initial state
      notes: [],

      // Add a new note
      setNotes: (payload) =>
        set((state) => ({
          notes: [...state.notes, payload],
        })),

      // Delete a note by ID
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((item) => item.id !== id),
        })),

      // Edit a note by ID
      updateNote: (id, payload) =>
        set((state) => ({
          notes: state.notes.map((item) =>
            item.id === id ? { ...item, ...payload } : item
          ),
        })),
    }),
    { name: 'NoteBook' } // Key for localStorage persistence
  )
);
