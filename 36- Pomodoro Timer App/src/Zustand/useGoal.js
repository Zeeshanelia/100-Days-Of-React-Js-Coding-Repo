import { create } from "zustand";
import { persist } from 'zustand/middleware'

export const useGoal = create(persist(
    (set) => ({
        goals: [],
        setGoal: (payload) => set((state) => ({
            goals: [...state.goals, payload]
        })),
        updateGoalProgress: (id, progress, isActive) => set((state) => ({
            goals: state.goals.map(goal =>
                goal.id === id
                    ? { ...goal, progress, isActive: isActive !== undefined ? isActive : goal.isActive }
                    : goal
            )
        })),

        
        resetGoalTimer: (id) => set((state) => ({
            goals: state.goals.map(goal =>
                goal.id === id
                    ? { ...goal, progress: 0, isActive: false, timeLeft: goal.timer * 60 }
                    : goal
            )
        }))
    })),
    { name: 'goal-storage' }
)