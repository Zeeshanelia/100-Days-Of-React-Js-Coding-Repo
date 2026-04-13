import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBook = create(persist(
    (set)=>({
        books: [],
        setBook: (payload)=>set((state)=>({
            books: [...state.books, payload]
        })),
        updateStatus: (id, status)=>set((state)=>({
            books: state.books.map((item)=>{
                if(item.id === id)
                {
                    return {
                        ...item,
                        status: status
                    }
                }
                else {
                    return item
                }
            })
        })),
        deleteBook: (id)=>set((state)=>({
            books: state.books.filter(item => item.id !== id)
        }))
    }),
    {name: "book"}
))