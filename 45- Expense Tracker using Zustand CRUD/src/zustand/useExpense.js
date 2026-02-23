import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useExpense = create(persist(
  (set) => ({
    expenses: [],
    setExpense: (payload) => set((state) => ({
      expenses: [...state.expenses, payload]
    })),
    deleteExpense: (id) => set((state) => ({
      expenses: state.expenses.filter(item => item.it !== id)
    })),
    updateExpense: (id, payload) => set((state) => ({
      expenses: state.expenses.map(() => {
       return item.id === id ? { ...item, ...payload } : item
      })
    }))
  }),
  { name: 'expenses' }
)

)