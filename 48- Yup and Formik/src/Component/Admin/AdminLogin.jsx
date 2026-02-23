import Password from "antd/es/input/Password"
import { useState } from "react"
import { Link } from "react-router-dom"
import * as Yup from 'yup'
import { useFormik } from "formik"

const schema = Yup.object({
    email: Yup.string()
        .email("Invalid email format")
        .required("Email field is required"),

    password: Yup.string().required("password is required").min(8).matches(/[A-Z]/, "Atleast One UpperCase Required")
        .matches(/[a-b]/, "Atleast One LowerCase Required")
        .matches(/[0-9]/, "Atleast One Number Required")
})


export const AdminLogin = () => {

    const login = (values) => {
        console.log(values)
    }

    const formic = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: schema,
        onSubmit: login
    })



    return (
        <>
            <div className="bg-[#777777] h-screen flex jusify-center items-center">
                <div className=" mx-auto  grid grid-cols-2  md:w-10/12 ">

                    <img src="/images/SignIn.webp" alt="" className="rounded-xl shadow-xl " />


                    <div className="flex flex-col jusify-center py-5 px-22 ">
                        <h1 className="text-xl font-bold text-[#DEC6A5]">Admin Panel</h1>

                        <form className="flex flex-col gap-3 mt-5" onSubmit={formic.handleSubmit}>
                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-medium text-[#DEC6A5]">Email </label>
                                <input onChange={formic.handleChange} type="text" name="email" className="border rounded p-2 text-black" placeholder="email@yahoo.com" />

                                {
                                    formic.touched.email && formic.errors.email && (
                                        <small className="text-rose-700 font-semibold">
                                            {formic.errors.email}
                                        </small>
                                    )
                                }


                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-medium text-[#DEC6A5]"> Password </label>
                                <input onChange={formic.handleChange} type="password" name="password" className="border rounded p-2 text-black" placeholder="*******" />
                                {
                                    formic.errors.password &&
                                    <small className="text-rose-700 font-semibold">{formic.errors.password}</small>
                                }

                            </div>

                            <button className="w-full p-2 bg-green-400 hover:bg-green-500 rounded-lg font-medium"> Login </button>
                        </form>

                        <div className="flex flex-col gap-1">
                            <Link to="#" className=" text-green-200"> Forget password </Link>
                            <Link to="#" className=" text-green-200"> Create account </Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}