import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useBookmark = create(persist(
  (set) => ({
    bookmarks : [],
    setBookmark: (payload) => set((state) => ({
      bookmarks: [...state.bookmarks, payload]
    })),


  }),
  { name: 'NoteBook' }
));
