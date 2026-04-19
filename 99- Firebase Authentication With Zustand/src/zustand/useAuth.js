import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuth = create(persist(
    (set)=>({
        user: null,
        setUser: (payload)=>set(()=>({
            user: payload
        }))
    }),
    {name: "auth"}
))