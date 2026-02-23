import { toast } from "react-toastify";
import { create } from "zustand"
import { persist } from "zustand/middleware"
import axios from "axios"
const env = import.meta.env
axios.defaults.baseURL = env.VITE_SERVER_URL


export const useAuth = create(
  persist(
    (set) => ({
      user: null,

      login: async (values) => {
        try {
          const req = await axios.post("/auth/login",values
          );

          toast.success("Login Successfull", { position: "top-center" });
          set({ user: req.data });
         setTimeout(()=>{
           window.location.href = '/admin/dashboard'
         }, 2000)

          // return
        }

        catch (error) {

          const message = error?.response?.data?.message || error.message || "Something went wrong";
          toast(message, { position: "top-center" });
          set({ user: null });
        }
      },

      Logout : () => {
          toast.success("Logout : wait for Redirection", { position: "top-center" });
           set({ user: null });
      }
    }),
    { name: "auth" }
  )
);
