
export const AdminLogin = () => {

    return (
        <>
        <div className="bg-[#777777] h-screen flex jusify-center items-center">
            <div className=" mx-auto  grid grid-cols-2  w-10/12 ">

                <img src="/images/SignIn.webp" alt="" className="rounded-xl shadow-xl"/>


                <div className="flex flex-col jusify-center py-18 px-22 ">
                    <h1 className="text-xl font-bold text-[#DEC6A5]">Admin Panel</h1>
                    <form className="flex flex-col gap-5 mt-5">

                        <div className="flex flex-col gap-1">
                            <label className="text-lg font-medium text-[#DEC6A5]">Email </label>
                            <input type="text" name="" className="border rounded p-2 text-black" placeholder="email@yahoo.com"/>
                        </div>

                         <div className="flex flex-col gap-1">
                            <label className="text-lg font-medium text-[#DEC6A5]"> Password </label>
                            <input type="text" name="" className="border rounded p-2 text-black" placeholder="*******"/>
                        </div>

                        <button className="w-full p-2 bg-green-400 rounded-lg text-lg"> Login </button>


                    </form>
                </div>
            </div>
        </div>


        </>
    )
}