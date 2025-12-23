import { useState } from "react";


export const StickyNotes = ({id , text}) => {
    const [toggle, seToggle] = useState(false);


    return (<>
        <div className="m-10 flex gap-4 rounded flex">

            {
                toggle ? (
                    <div className="flex flex-col bg-gray-400 rounded shadow-lg shadow-red-400">
                        <textarea className="bg-white h-26 w-32 rounded">
                        </textarea>

                        <button onClick={()=>seToggle(false)}  className="font-semibold hover:bg-blue-400 rounded"> <i className="ri-heart-add-2-fill text-xl mr-1"> </i>
                            Save
                        </button>
                    </div>
                ) : (
                    <div className=" inline-block w-26 h-16 relative bg-gray-400 rounded-lg shadow-lg shadow-red-400">
                        <p className="absolute top-2 left-7 bg-black/60 text-white font-semibold text-xs px-1 py-1 rounded backdrop-blur-sm">
                            {text}
                        </p>

                        <div className="absolute bottom-1 left-9 right-2 flex gap-4">
                            <button onClick={()=>seToggle(true)} className=" font-semibold">
                                <i className="ri-edit-2-fill"></i>
                            </button>
                            <button className=" font-semibold">
                                <i className="ri-delete-bin-3-fill"></i>
                            </button>
                        </div>
                    </div>
                )
            }

        </div>
    </>)
}
