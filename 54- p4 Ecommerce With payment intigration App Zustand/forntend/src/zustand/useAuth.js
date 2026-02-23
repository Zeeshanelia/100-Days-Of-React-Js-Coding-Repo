const env = import.meta.env
import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { toast } from "react-toastify";
axios.defaults.baseURL = env.VITE_SERVER_URL

export const useAuth = create(persist(
    (set)=>({
        user: null,
        login: async (values)=>{
            try {
                const res = await axios.post("/auth/login", values)
                toast.success("Login success", {position: 'top-center'})
                set({user: res.data})
                setTimeout(()=>{
                    window.location.replace("/admin/dashboard")
                }, 2000)
            }
            catch(err)
            {
                toast.error(err.response.data.message, {position: 'top-center'})
                set({
                    user: null
                })
            }
        },
        logout: ()=>{
            toast.success("Logout success wait for redirection", {position: 'top-center'})
            set({
                user: null
            })
        }
    }),
    {name: "auth"}
))