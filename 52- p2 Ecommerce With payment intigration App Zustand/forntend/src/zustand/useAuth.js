import { toast } from "react-toastify";
import { create } from "zustand"
import { persist } from "zustand/middleware"
import axios from "axios"
export const useAuth = create(
  persist(
    (set) => ({
      user: null,

      login: async (values) => {
        try {
          const req = await axios.post(
            "http://localhost:8080/auth/login",
            values
          );

          set({ user: req.data });
        }
        catch (error) {
          // safe chaining to avoid crash
          const message =
            error?.response?.data?.message || error.message || "Something went wrong";

          toast(message, { position: "top-center" });

          set({ user: null });
        }
      },
    }),
    { name: "auth" }
  )
);
